"""Inspect the exact static export: routes, metadata, links, images and schema."""
import json
from pathlib import Path
from urllib.parse import urlparse, unquote
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'out'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.images=[]; self.ids=set(); self.h1=0; self.title=''; self.in_title=False; self.meta={}; self.canonical=[]; self.schemas=[]; self.schema=None
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='h1': self.h1+=1
        if tag=='a': self.links.append(a.get('href',''))
        if tag=='img': self.images.append(a)
        if tag=='title': self.in_title=True
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href'))
        if tag=='script' and a.get('type')=='application/ld+json': self.schema=''
    def handle_data(self, data):
        if self.in_title:self.title+=data
        if self.schema is not None:self.schema+=data
    def handle_endtag(self, tag):
        if tag=='title':self.in_title=False
        if tag=='script' and self.schema is not None:self.schemas.append(json.loads(self.schema));self.schema=None

paths=['/','/about/','/programs/','/programs/kindergarten/','/programs/elementary-beginner/','/programs/elementary-intermediate/','/programs/advanced/','/teacher/','/stories/','/research/','/research/first-baduk/','/research/five-gifts/','/research/power-of-focus/','/faq/','/contact/','/privacy/','/terms/']
pages={}
for path in paths:
    file=OUT/path.strip('/')/'index.html'
    assert file.exists(), f'Missing route {path}'
    p=Page();p.feed(file.read_text(encoding='utf-8'));pages[path]=p
    assert p.h1==1,(path,'h1 count',p.h1)
    assert p.title and p.meta.get('description'),(path,'missing title/description')
    assert len(p.canonical)==1,(path,'canonical')
    assert p.meta.get('og:title') and p.meta.get('og:description') and p.meta.get('og:image'),(path,'Open Graph')
    assert p.schemas,(path,'schema missing')
assert len({p.title for p in pages.values()})==len(paths),'Duplicate title'
assert len({p.meta['description'] for p in pages.values()})==len(paths),'Duplicate description'
checked=0
for path,p in pages.items():
    for href in p.links:
        u=urlparse(href)
        if u.scheme or u.netloc:continue
        target=(u.path or path)
        if not target.endswith('/'):target+='/'
        assert target in pages,(path,'broken route',href)
        if u.fragment:assert unquote(u.fragment) in pages[target].ids,(path,'broken anchor',href)
        checked+=1
    for img in p.images:
        assert 'alt' in img,(path,'missing alt')
        src=img['src'];assert (OUT/src.lstrip('/')).exists(),(path,'broken image',src)
for extra in ['favicon.svg','robots.txt','sitemap.xml']:
    assert (OUT/extra).exists(),extra
report={'routes':len(paths),'internal_links':checked,'unique_titles':len(paths),'unique_descriptions':len(paths),'result':'pass'}
(ROOT/'qa'/'static-verification.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps(report))
