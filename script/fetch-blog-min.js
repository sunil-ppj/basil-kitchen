document.addEventListener("DOMContentLoaded",async()=>{let e=document.querySelector(".blog-swiper-wrapper");async function a(){try{let a=await fetch("https://thebasilkitchen.com/blog/wp-json/wp/v2/posts?per_page=6&_embed"),s=await a.json();e.innerHTML="",s.forEach(a=>{let s=a.title.rendered,t=a.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g,""),r=t.length>100?t.substring(0,100)+"...":t,d=a.link,l=a._embedded?.["wp:featuredmedia"]?.[0]?.source_url||"default-image.jpg",n=a._embedded?.author?.[0]?.name||"Admin",i=new Date(a.date).toLocaleDateString(),o=document.createElement("div");o.classList.add("swiper-slide","blog-swiper-slide"),o.innerHTML=`
                    <article class="blog-card">
                        <img src="${l}" alt="${s}" class="blog-image">
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>${i}</span>
                                <span>${n}</span>
                            </div>
                            <h3>${s}</h3>
                            <span class="post-excerpt">${r}</span>
                        </div>
                        <div class="blog-footer">
                            <a href="${d}" class="read-more">Read more</a>
                        </div>
                    </article>
                `,e.appendChild(o)})}catch(t){console.error("Error fetching blog posts:",t)}}a()});
