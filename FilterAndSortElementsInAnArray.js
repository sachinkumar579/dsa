const list = [
     {
       name:'vue',
       rank:3,
       topic:'JS'
     },
     {
       name:'Angular',
       rank:2,
       topic:'JS'
     },
     {
       name:'Spring',
       rank:4,
       topic:'Java'
     },
     {
       name:'react',
       rank:1,
       topic:'JS'
     }
   ]

// filter will return items : topic='JS' , sort will sort items in increasing order of rank   
console.log(list.filter(data=>data.topic==='JS').sort((a,b)=>a.rank-b.rank))
   
