(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{846:function(t,e,n){},847:function(t,e,n){t.exports=n.p+"img/e21b4a8.png"},848:function(t,e,n){t.exports=n.p+"img/07b9dba.png"},849:function(t,e,n){},850:function(t,e,n){t.exports=n.p+"img/c62a71a.png"},851:function(t,e,n){"use strict";n(846)},852:function(t,e,n){t.exports=n.p+"img/3ca9942.png"},853:function(t,e,n){t.exports=n.p+"img/7fb325c.png"},854:function(t,e,n){t.exports=n.p+"img/17021a7.png"},855:function(t,e,n){"use strict";n(849)},856:function(t,e,n){"use strict";n.r(e);n(77);var o=n(30),r={props:{},data:function(){return{dataTime:[]}},computed:{},watch:{},created:function(){this.handleEvent()},mounted:function(){},methods:{handleEvent:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/events");case 2:0===(n=e.sent).code?t.dataTime=n.data:t.dataTime=[];case 4:case"end":return e.stop()}}),e)})))()},handleOddEven:function(t){return t%2==0}}},c=(n(851),n(61)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeBox"},[n("div",{staticClass:"time"},[t._l(t.dataTime,(function(e){return[t.handleOddEven(e.id)?t._e():n("div",{key:e.id,staticClass:"time-item"},[n("div",{staticClass:"time-item-odd"}),t._v(" "),n("div",{staticClass:"time-item-axis"}),t._v(" "),n("div",{staticClass:"time-item-odd"},[n("div",{staticClass:"time-item-odd-line"}),t._v(" "),n("div",{staticClass:"time-item-odd-text"},[n("strong",[t._v(t._s(e.date))]),t._v(" "),n("span",[t._v(t._s(e.info.replace(/(\s*$)/g,"")))])])])]),t._v(" "),t.handleOddEven(e.id)?n("div",{key:e.id,staticClass:"time-item"},[n("div",{staticClass:"time-item-even"},[n("div",{staticClass:"time-item-even-line"}),t._v(" "),n("div",{staticClass:"time-item-even-text"},[n("span",{staticClass:"time-item-even-text__info"},[t._v(t._s(e.info.replace(/(\s*$)/g,"")))]),t._v(" "),n("strong",[t._v(t._s(e.date))])])]),t._v(" "),n("div",{staticClass:"time-item-axis"}),t._v(" "),n("div",{staticClass:"time-item-even"})]):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports},858:function(t,e,n){"use strict";n.r(e);var o={props:{source:{type:Array,default:function(){return[]}}},data:function(){return{option:{watchSlidesProgress:!0,slidesPerView:"auto",centeredSlides:!0,loop:!0,loopedSlides:7,autoplay:!1,pagination:{el:".swiper-pagination",clickable:!0},on:{progress:function(){for(var i=0;i<this.slides.length;i++){var t=this.slides.eq(i),e=this.slides[i].progress,n=1;Math.abs(e)>1&&(n=.3*(Math.abs(e)-1)+1);var o=e*n*200+"px",r=1-Math.abs(e)/5,c=999-Math.abs(Math.round(10*e));t.transform("translateX("+o+") scale("+r+")"),t.css("zIndex",c),t.css("opacity",1),Math.abs(e)>3&&t.css("opacity",0)}},setTransition:function(t){for(var i=0;i<this.slides.length;i++){this.slides.eq(i).transition(t)}}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},optionMobile:{watchSlidesProgress:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,loop:!0,autoplay:!1,on:{progress:function(){for(var i=0;i<this.slides.length;i++){var t=this.slides.eq(i),e=this.slides[i].progress,n=1;Math.abs(e)>1&&(n=.3*(Math.abs(e)-1)+1);var o=e*n*90+"px",r=1-Math.abs(e)/5,c=999-Math.abs(Math.round(10*e));t.transform("translateX("+o+") scale("+r+")"),t.css("zIndex",c),t.css("opacity",1),Math.abs(e)>3&&t.css("opacity",0)}},setTransition:function(t){for(var i=0;i<this.slides.length;i++){this.slides.eq(i).transition(t)}}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=(n(855),n(61)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"computer1"},[e("swiper",{ref:"mySwiper",attrs:{options:this.option}},[this._l(this.source,(function(t,n){return e("swiper-slide",{key:n,staticClass:"swiper-slide"},[e("img",{staticClass:"swiper-img",attrs:{src:t.src}})])})),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),this._v(" "),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),this._v(" "),e("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)])}),[],!1,null,null,null);e.default=component.exports},868:function(t,e,n){t.exports=n.p+"img/c68d6ca.png"},869:function(t,e,n){t.exports=n.p+"img/d52664c.png"},870:function(t,e,n){t.exports=n.p+"img/8f4dcd8.png"},871:function(t,e,n){t.exports=n.p+"img/a20f9d7.png"},872:function(t,e,n){t.exports=n.p+"img/d056bb6.png"},873:function(t,e,n){t.exports=n.p+"img/5361cdf.png"},874:function(t,e,n){t.exports=n.p+"img/c49aac8.png"},875:function(t,e,n){t.exports=n.p+"img/0a81e4a.png"},876:function(t,e,n){t.exports=n.p+"img/1aa228d.png"},877:function(t,e,n){t.exports=n.p+"img/72dce28.png"},878:function(t,e,n){t.exports=n.p+"img/7698346.png"},879:function(t,e,n){},925:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAmVBMVEVHcEy/FRXEFR3EFh2/AADFFRvCFRvCFRvFFhzEFh2/AAC/ExrEFxzEEhvFFBvDFhzFFRzDFRzCFBrCFhrFFRvHFhq/EBDDFR3EFhvDFhzCFRzEFhvHExzDFh3EFh3EFBnEFxzDFRzDFBvDFh3EFhzEFhrEFRrEFhzDFBzDFh3DFRnFFxrDFhzFFxu/DRrEFRzDFRnFFhvEFx1kw9TTAAAAMnRSTlMADI/DBINUYH+fCCjXOEuId0hYUHs7EGtnr2yfN+eXNL93THPzdFf7QO9IT7d7FGM8c0EO+ocAAACwSURBVCjPvZLZDoIwEEWLtgxFUMB9xX1f7/9/nOVBTYBOiDHeh6bJSaYzpyNEpSglGRoCSTm5Kq31GajrfB5ZwRqsuRl8seN2Vj0mopYpTvnc3w00doi4wcJEij+lO5tweIrgdXUWXiHAwZxbwVtrGuzx1uSyoIsCYEO0t7U2xtphOu+N0h9q8jsR9yUDwC0nzsoImgPDgrtTBWvKjrP3pGvbteNn1wCPmyzu+1/4eAIBwCvAkRJDzQAAAABJRU5ErkJggg=="},926:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA81BMVEVHcEzFFhzCFRvEFhzEFx3GFBzEFh2/AADGFRzDFhy/FRW/FRXEFhvEFhzEFxzEFR3DFhzDFhy/EBDEFh3EFhy/AADEFh3EFhvFFh3FFhzDFh3CFRvFFRzFERfDExrDFxzCFBzEFBnDFRzDFhy/DRrDFhzFFBvMERHDFx3EFhzJDRvEFhzFFhy/EBjHFhrCFhzDFh3DFh3FFhzDFRvDFh3IFBnEFBrGExvEFh3DFxzEFxzDFRnDFRnFFhvEFxzDFhrEFhzCFhrFFRu/Exq/FRW/FRvEFh3FFRvFFxrFFxvEFxzEFhzEFh3EFx3EFxzDFh3DFhy++yysAAAAS3RSTlMAf2D73z+fBG+rGAxn29eP+/MQw/MI/p/+/udUdyxE62Q0b+MUt0sP94sTt6sgO1zvxFOnuzMnQ7u/9zxIn8tEx1BUKCQwl4NPe5MGIQvoAAABKElEQVQoz33T53aCQBQE4GuWBBQQFXuLpvfem+ltlpX3f5ogElia82sP32HvsACRlFLLoPxcddGxcvWo2+ZottRsva4CdQDFTD+rwCmXNCFwq6dVY0KclogMJmDXklqAwI1/V4/NdvEW6q65NkfVamN6EMx88AqUa6QWp1idq7dqWmGj+yrHZHYN/inoF17fgjRp8PTYmKnmH5UNwbR4FTVUsh2wXq6Sg7thvpLDlQUaciNTAz40Ty6zNOBjF6Yu6/aezDUFOJd0sFPZkmePGfgo2nmJO4VYtb4jqpvh3BTTvtuJWqV5Yx1R5zTTsMLDJ8pgen+jRSwl5HrwUcRjAH1/8Qz+uZzMtznlLz6/cg43GYCXg3f0xSCScaF8/M8Z/6wk8zua/wt/UhNGo/q4azAAAAAASUVORK5CYII="},927:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABAlBMVEVHcEzDFx3EFhzEFx2/AADEFhzEFx3EFh3FFhzEFxzEFhzDFh3DFRm/EBDEFhvDFhzCFRvGFRzDFxzFFRy/AADDFhzDFhzDFhvDFRvEFh3EFh3EFh3EFxzFFRvEFRy/FRXDFhzEFRvEFR3EFx3CFBrDFRnFFRvDFxzFFBvDFh3EFhy/FRXEFxzEFhy/EhLCFBzFExrEFhzEFRzCExrDFxzHFhrCFRvFFh2/DRrFFhzDFhrEFRrFFRvEFxzIFBnEFhzGExrEFhvEFxzDFBvDFBnGExzFFhzDFRzDFRzDFhzCFhrDFxzCFhrEFhzEFxzMERG/FRvDFhy/ExrFFxrJDRvEFx2ettPwAAAAVXRSTlMA9/v3BMffn3+/8+c8EGfzVG/rdwjjqy+nw5e7h6djGPtfj8tYSDBvS+9bJNfPHGRPi5tQhztgcxRTRFeD0zO3KJeTTDMbr29It1CzO9PLDzCvKE8TAB9DXwAAAVtJREFUKM91k2dDwjAQhq+lLSl7KENERNmIuPfee7///694SW1pIb5ferknSS83iAK9iOc1x3ktFcs0o7n7eQQaNa0o7TnKH0PM27V6FqaLElUe0nG4lM7dmcByJoBWiWm9wZbErOE5O/I+3gQSLWXFEfdc+3zBkmceMk1RFFPOhKFekE4COZrGVARs+RXAAs1icoFvjquAREOHO0CV6Bq4Ih2Wx9dpBUjp8RjIkI0Y6fFQBpXE6T+YTNQI6LvuToCT7kQGP01VwPzDAlHZfHlBiCO/rF0REvhyG4ZFWn3I0CIPiygDjKkNXOqxLdPCSc0e6OgNVPE5gi0Ntfjwkywod9fGLC6qirC2gezuNG1yj1wEjZg9VtbA70CZnz1/a50XlVuV1Jpcl6vhViQ64aVR6b3LTv0ZPMq2Xgr/qu2NgQGj741BZ2qI8s6kEm8tTZ5T4pNHcFTqfk18v8agTXGNxR7aAAAAAElFTkSuQmCC"},928:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAzFBMVEVHcEzDFh3EFhvDFhrEFx3DFBzEFhzFFhzEFxy/EBi/Exq/FRW/FRXDFR3DFRzDFhy/FRXEFBm/DRrHFhrEFhzDFBvFFhzDFRzDFhzEFhzEFh3EFhzDFhzEFxzDFRzDFhy/EBDEFhzCFhvEFhvEEhvDFx3EFh3FFx3FFRy/ER3DFRzDFhvDFxzEFBrCFBzGFxzEFhvEFxzFFhzCFRvDFRnDFRvCFhzEFhrDFh3DFhy/AADDExq/AADEFx3EFhzDFhzDFxzEFh3EFxzDFh1Oav0uAAAAPXRSTlMA56BE30D+f78gKBgMa5D4JDQUO/tM/kjji9/zr+769xDPaGg4e5d7dyxvL/cnZG+f969UPKdcdN6ACEQE6km21QAAAOdJREFUKM+101lPwkAUhuEzBU+hLWXfd0FlB8Vd+xXG//+fqIXgxZySmOg7TebiuehJ2kNElMuIzSgupUMIhbVUzDc6VGmjxpe2Y7aD8IqMsrvgr3k5v8Ruu+1eYJ/ZT2a3z9x3RS6tmp1XHg651WnmSgb7jOhUP+Lr1uCpAr95RO8vgCqa73YUenWixx6UI43m3ON5MNjywhEn94CnbncDeCIXEU31/YxFHjEqllUBX4tcz1sFooKVr/7TB03msn2uLHALwSkogTM///CDwJ/Zc78ZbYKENbg7LhHrvZA+LVHSCq4jOgCjgT3PkAqV9gAAAABJRU5ErkJggg=="},929:function(t,e,n){t.exports=n.p+"img/944cea3.png"},930:function(t,e,n){t.exports=n.p+"img/5609db5.png"},931:function(t,e,n){t.exports=n.p+"img/ff9f275.png"},932:function(t,e,n){t.exports=n.p+"img/adb2e30.png"},933:function(t,e,n){t.exports=n.p+"img/a77422b.png"},934:function(t,e,n){t.exports=n.p+"img/4e36ec9.png"},935:function(t,e,n){t.exports=n.p+"img/1b4bd22.png"},936:function(t,e,n){t.exports=n.p+"img/4c3c17c.png"},937:function(t,e,n){t.exports=n.p+"img/29f480f.png"},938:function(t,e,n){t.exports=n.p+"img/ad8100a.png"},939:function(t,e,n){t.exports=n.p+"img/486ff84.png"},940:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAAjVBMVEVHcEwWI0AAIEAXJEEVI0AWJUAVIEAQIEAQIUIXJUEXJEAAAEAXJUAVFUAVIkAXJEAXJEATIEAWJEAXJUAWJEAWIUEWJEAVIEAVJEATJEAUJEAWJEAWJEAWJUEWJEAWJEANGkAWI0ARIkQWJUAXJEAVJEAWJUARI0AVI0AWJUAVJEAXJEAWJEASJEAXJUH22X1dAAAALnRSTlMAnwj3YJ8YIB/fvwTXDDz3kyjH69sv5zB3XFuvq/OjzxRzD8OzVPMsV/t4y9M4ibNuVgAAAVZJREFUSMftltdywyAQRQGhkqi4yr13p/D/n5cVTSLjDGv7wQ/RfbDZOxwNcKUdCHmJWKKU6nqXGO20k+qaNaiIdoTSWtmXqzC6XtSDv3TdoZHFMjtLxNIJa0OE0olrIzMgtdZSTbrBkXBpHar3BoucutsFjssBt5zRFJbK7BIImiN2My3Xcg9z5eEdNGpwo8o4lB5ubV56yyl9eriVmfgty8KUKw+X96sPjPOzrs+cV59nP/edSzQU4lQ2zqE8CTGM/OfZG8BZxLaM4YwGPUwORQA9ZKOLDfSeoMDldwRjrzaU72F8xOa+BWdRtdJ0AaMt/n3pgtVt/GO5dA7ehEzgd57ewekY3eAwnIxRuMGhOBmjGxyOq2J0g0NyZPwxJo9wf+hfcQleDnefnufe8Gpz93AM+uUMjc2gn7Lf9zOc6I37IEJZfZGkAZoKaLNVsRgr9poL+Q+RPo8MgyQTcAAAAABJRU5ErkJggg=="},941:function(t,e,n){t.exports=n.p+"img/13df975.png"},942:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAAzFBMVEVHcEz////////////////////////////////////////////////////////o6ezz9PX////////////////////////////////////////7+/z////6+vz///////////////////////////////////////8XJUHFyM/i5OeorbinrbdRW3Di4+dud4jp6u1NWG2Di5qZn6w7R15YYnZcZnlCTmQpNlAsOVOus72vtL7EyM+SmKaVnKiWnKnBxcySmabs7fDt7vCNoRAgAAAAKHRSTlMAnz8IYL8fIEBf18MYBFf377N/k7sUE7ffHDjj4987WFtEh0uIb3AXbqNCBgAAASNJREFUSMft1sl2gjAUgOFQxDApzlNHa1sZ6oBjZ6t9/3cSu1DoufcGOVg2/rssvk1ySWAsi/JUDUzdXLlU47IMu9bCJltVQMZdmtmDWkKn4G7yjOTTznnIgRkjgVPhPZPOLjMn97R9v+ena6GKecSZ+rd3KJiXmRfu3SrCrrqmx/W1VACdMhDMuctTd3MHaUq7UVMFe3IEToKPUz21a+xuwv7xTvoJLkIlgYvOJ+nGw+EmgTN5UP14R31H6bnHC7CmwE2xgZzTLub7kIYrlF5o91kFHbuz3iJP0My2/dDyQzdhx/ht+AnSd3NmHNZdmSEuWtzv6Oz+wRka2L3A+R7ShHZx3oe/1YSuDbrKF82W1/CeyeXgIiS67GA/snVOlckf+Rb4c7MRgYbJXAAAAABJRU5ErkJggg=="},943:function(t,e,n){t.exports=n.p+"img/f296cf5.png"},944:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAA81BMVEVHcEwAAEAVIEAWJUAVI0AXJEAWJUAUJEAXJUAVI0AWJUAVJUATIEAVIUAXJEAWJEAAIEAWJUAWJEAWJUEWJEAUI0AVJUAVFUAUJEEXJUAWJEAWJEAWJEAVJEAXJEAWJEAXJEEVI0AWJEAVJEAWJEEXJEAVJEAWI0ASJEAXJEAWI0AUI0EWJEITIkEWJUAUIkEWJEARI0AVIEAWJUEWJUAVI0AWJEEQIEAWI0AXJUAWJUAQIEAWJD8SIEAVJEAVJUAWI0AWJEAWJEAWJUAWJEAWJEAWJEAWI0AUIkAXJEAXJEAWJEAVJEAVIkAXJUEWJEAWJUABbt7aAAAATnRSTlMABBj7X7+fQN9gw4MoVJPbCIvH+6NYbww/b6vj57eH7/ck02Pv92tzOMtQMyND80uILDBTz5+iEJfXuyDFONen4PTw38/gt8JMs+t/4jzxYBoxAAABcElEQVRIx+2WZ3eCMBSGEyiiFmU6qtZV7d577z0u/f+/piEguxI4PZ5jj++X5IY8OeHe8BKEpkgbc6zaqXkUtwbs6hy4XBHSiN9zMAnSSXU4kfR3RUaRuTkfV2DN4Iz7W840zWwcwFHGfS5OmDueZD51gHIWbkHWpCycT/+Dwzf5qD6SuVKsN0mJXCGWE5m455xfRWZOjB2ZcfHcF2nfg+fh9n54l5cNZSynDCJlNe2mMpZDFT0Vt+SOXBmCpydirZfXD7IgqNg5n6UA13bOZ0jzZJjzQutvfBqYQM5ZFydyqAnQOvHFPR7gHCVzKonbvrjxS9nC3EWX3CG2PEMjj5tKIE99WrsOefA5KqTQsxfarjuTqhDJ09CrwbdbEWKy2Prg+Co1jTL4DNvRII6zLivcmdUTNlG9b3UaoWS+vtH6PZLtvYyKmaNvWqM3Kl6jKxmY3fLs/VnSV1KapUwxbT+ty+LlFhyuZ7mkKqtoCvUD1O68090aXpYAAAAASUVORK5CYII="},945:function(t,e,n){t.exports=n.p+"img/12fb047.png"},946:function(t,e,n){t.exports=n.p+"img/99039a4.png"},947:function(t,e,n){"use strict";n(879)},948:function(t,e,n){"use strict";n.r(e);var o={props:{},data:function(){return{dataSecond:[{id:1,title:"home.manage",conntent:"home.idea",conntent1:"home.idea1",conntent2:"",img:n(939)},{id:2,title:"home.manage2",conntent:"home.idea2",conntent1:"home.idea21",img:n(940)},{id:3,title:"home.manage3",conntent:"home.idea3",conntent1:"home.idea31",conntent2:"home.idea32",img:n(941)},{id:4,title:"home.manage4",conntent:"home.idea4",conntent1:"home.idea41",conntent2:"home.idea42",img:n(942)},{id:5,title:"home.manage5",conntent:"home.idea5",conntent1:"home.idea51",conntent2:"",img:n(943)},{id:6,title:"home.manage6",conntent:"home.idea6",conntent1:"home.idea61",conntent2:"",img:n(944)},{id:7,title:"home.manage7",conntent:"home.idea7",conntent1:"home.idea71",conntent2:"",img:n(945)},{id:8,title:"home.manage8",conntent:"home.idea8",conntent1:"home.idea81",conntent2:"",img:n(946)}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=n(61),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:"space-around"}},t._l(t.dataSecond,(function(e){return n("a-col",{key:e.id,staticClass:"home-back-second-item",attrs:{lg:5,xs:22}},[n("div",{staticClass:"home-back-second-img"},[n("img",{attrs:{src:e.img,alt:"second-"+e.id}})]),t._v(" "),n("div",{staticClass:"title-h3__black",staticStyle:{"text-align":"left","padding-top":"15px"}},[t._v("\n      "+t._s(t.$t(e.title))+"\n    ")]),t._v(" "),n("div",{staticClass:"home-back-second-content",domProps:{innerHTML:t._s(t.$t(e.conntent))}}),t._v(" "),e.conntent1?n("div",{staticClass:"home-back-second-content",domProps:{innerHTML:t._s(t.$t(e.conntent1))}}):t._e(),t._v(" "),e.conntent2?n("div",{staticClass:"home-back-second-content",domProps:{innerHTML:t._s(t.$t(e.conntent2))}}):t._e()])})),1)}),[],!1,null,null,null);e.default=component.exports},949:function(t,e,n){"use strict";n.r(e);n(77);var o=n(30),r={props:{},data:function(){return{obj:{where:{homeenable:1},order:"homeindex desc",page:1,limit:3},arrNews:[]}},computed:{},watch:{},created:function(){this.handleNewList(this.obj)},mounted:function(){},methods:{handleNewList:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.post("/newsfind",t);case 2:0===(o=n.sent).code?e.arrNews=o.data.rets:e.arrNews=[];case 4:case"end":return n.stop()}}),n)})))()}}},c=n(61),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-row",{attrs:{type:"flex",justify:t.isMobile?"center":"space-around"}},t._l(t.arrNews,(function(e){return n("a-col",{key:e.id,staticStyle:{"margin-bottom":"2em"},attrs:{lg:7,xs:23}},[n("nuxt-link",{staticClass:"home-fourth-box",attrs:{to:{name:"news-id",params:{id:e.id}}}},[n("div",{domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("h4",{staticClass:"about-first-one-title",staticStyle:{padding:"0 20px"},attrs:{title:e.title}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"about-first-one-content",staticStyle:{padding:"0 20px"}},[t._v("\n        "+t._s(e.introduction)+"\n      ")]),t._v(" "),n("div",{staticClass:"about-first-one-date"},[n("span",[t._v(t._s(e.date))]),t._v(" "),n("a-icon",{attrs:{type:"right"}})],1)])],1)})),1)}),[],!1,null,null,null);e.default=component.exports},950:function(t,e,n){"use strict";n.r(e);var o={props:{source:{type:Array,default:function(){return[]}}},data:function(){return{arrFirend1:[{key:1,href:"javascript:;",src:n(869)},{key:2,href:"javascript:;",src:n(870)},{key:3,href:"javascript:;",src:n(871)},{key:4,href:"javascript:;",src:n(872)},{key:5,href:"javascript:;",src:n(873)},{key:6,href:"javascript:;",src:n(874)}],arrFirend2:[{key:7,href:"javascript:;",src:n(875)},{key:8,href:"javascript:;",src:n(876)},{key:9,href:"javascript:;",src:n(877)},{key:10,href:"javascript:;",src:n(878)}],option:{watchSlidesProgress:!0,slidesPerView:"auto",centeredSlides:!0,loop:!0,loopedSlides:7,autoplay:!1,pagination:{el:".swiper-pagination",clickable:!0},on:{progress:function(){for(var i=0;i<this.slides.length;i++){var t=this.slides.eq(i),e=this.slides[i].progress,n=1;Math.abs(e)>1&&(n=.3*(Math.abs(e)-1)+1);var o=e*n*90+"px",r=1-Math.abs(e)/5,c=999-Math.abs(Math.round(10*e));t.transform("translateX("+o+") scale("+r+")"),t.css("zIndex",c),t.css("opacity",1),Math.abs(e)>3&&t.css("opacity",0)}},setTransition:function(t){for(var i=0;i<this.slides.length;i++){this.slides.eq(i).transition(t)}}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},optionMobile:{watchSlidesProgress:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,loop:!0,autoplay:!1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=(n(947),n(61)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[t.isMobile?n("div",{staticClass:"mobile"},[n("swiper",{ref:"mySwiper",attrs:{options:t.optionMobile}},[n("swiper-slide",{staticClass:"swiper-slide"},t._l(t.arrFirend1,(function(t){return n("a",{key:t.key,staticClass:"home-sixth-box-item",attrs:{href:"javascript:;"}},[n("img",{attrs:{src:t.src,alt:"item.key"}})])})),0),t._v(" "),n("swiper-slide",{staticClass:"swiper-slide"},t._l(t.arrFirend2,(function(t){return n("a",{key:t.key,staticClass:"home-sixth-box-item",attrs:{href:"javascript:;"}},[n("img",{attrs:{src:t.src,alt:"item.key"}})])})),0),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},957:function(t,e,n){"use strict";n.r(e);var o=n(931),r=n(932),c={data:function(){return{pictures:[{src:n(852)},{src:n(853)},{src:n(854)}],arrCase:[{src:n(933)},{src:n(934)},{src:n(935)}],playsinline:!0,num:1,icon:!1,page:1,isDisableRight:!1,isDisableLeft:!0,thirdMob:n(936),thirdCom:n(937),widthMobile:{width:"100%"},btnMob1:{color:"#c4171d",fontWeight:400},btnCom1:{color:"#c4171d",fontWeight:"bold"},widthComputer:{width:"80%"},btnCom:{paddingTop:"3vh",paddingBottom:"7vh"},btnMob:{paddingTop:"10px",paddingBottom:"25px"},imgMobile:{paddingBottom:"40px"},imgComputer:{paddingBottom:"80px"},contentMobile:{lineHeight:"1.5em",marginBottom:"30px"},contentComputer:{lineHeight:"2em",marginBottom:"7vh"},align:{alignItems:"center"},backComputer:{padding:"6vh 0 8vh 0",backgroundImage:"url(".concat(o,")")},backMobile:{padding:"20px 0",backgroundImage:"url(".concat(r,")")},arrFirend:[{key:1,href:"javascript:;",src:n(869)},{key:2,href:"javascript:;",src:n(870)},{key:3,href:"javascript:;",src:n(871)},{key:4,href:"javascript:;",src:n(872)},{key:5,href:"javascript:;",src:n(873)},{key:6,href:"javascript:;",src:n(874)},{key:7,href:"javascript:;",src:n(875)},{key:8,href:"javascript:;",src:n(876)},{key:9,href:"javascript:;",src:n(877)},{key:10,href:"javascript:;",src:n(878)}],arrShow:[],player:{},playerOptions:{controls:!1,playbackRates:[],autoplay:!1,muted:!0,loop:!0,preload:"auto",language:"zh",aspectRatio:"16:9",fluid:!0,width:"100%",height:"400px",sources:[{type:"video/mp4",src:"/video/gacvideo.mp4"}],poster:n(938),notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{volumeControl:!1,volumePanel:{inline:!1},timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}},head:function(){return{title:"智乾区块链 | 政务链 | 全行业高效自主区块链底层架构",meta:[{hid:"keywords",name:"keywords",content:"智慧政府,电子政务,大数据,云计算,政务微信,政务微博,政务云,政府信息化,信息化方案,智慧政府规划,企业征信,企业风险监测,企业画像,企业评分,智慧政务系统,智慧政务解决方案,智慧政务,区块链,电子存证,共享交换,数据孤岛,智乾科技,政务链,政务区块链,数字货币,链改,区块链开发,区块链平台,区块链应用,gachian,5G,物联网,互联网+"},{hid:"description",name:"description",content:"智乾区块链科技专业从事区块链研究、开发和应用落地的新兴公司。 公司核心集八年区块链技术积累，研发的“区块链即政务 -- 政务链（GACHAIN）”是国际上首个可创建主权分层级管理的公有区块链项目，达到业务办理去中心化的同时，拥有主权管理权限。于2018年被中国工信部收录于中国区块链产业白皮书，列为典型应用案例"},{hid:"og:description",name:"og:description",content:"智乾区块链科技专业从事区块链研究、开发和应用落地的新兴公司。 公司核心集八年区块链技术积累，研发的“区块链即政务 -- 政务链（GACHAIN）”是国际上首个可创建主权分层级管理的公有区块链项目，达到业务办理去中心化的同时，拥有主权管理权限。于2018年被中国工信部收录于中国区块链产业白皮书，列为典型应用案例"}]}},mounted:function(){var t=this;this.isMobile?this.$nextTick((function(){var e=t.$refs.videoBox.clientWidth;t.$refs.videoBox.style.height=9*e/16+"px",t.initMobile()})):this.$nextTick((function(){var e=t.$refs.videoBox.clientWidth;t.$refs.videoBox.style.height=9*e/16+"px",t.initComputer()}))},methods:{handleVideo:function(){this.$refs.play.style.display="none",this.$refs.video.play()},playerStateChanged:function(t){},playerReadied:function(t){this.player=t},initMobile:function(){this.num=6,this.arrFirend.length<=this.num?this.icon=!1:this.icon=!0,this.arrShow=this.handleChangePage(this.arrFirend,this.num)},initComputer:function(){this.num=parseInt(this.$refs.drag.offsetWidth/200),this.arrFirend.length<=this.num?this.icon=!1:this.icon=!0,this.arrShow=this.handleChangePage(this.arrFirend,this.num)},handleLeft:function(){if(this.isDisableRight=!1,1===this.page)return this.isDisableLeft=!0,!1;this.page-=1,this.isDisableLeft=!0,this.arrShow=this.handleChangePage(this.arrFirend,this.num,this.page)},handleRight:function(){if(this.isDisableLeft=!1,this.page*this.num>=this.arrFirend.length)return this.isDisableRight=!0,!1;this.page+=1,this.isDisableRight=!0,this.arrShow=this.handleChangePage(this.arrFirend,this.num,this.page)},handleChangePage:function(data,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=parseInt(t),o=data.length,r=t*(e-1),c=t*e,l=[];if(o<=e*n){for(var i=r;i<o;i++)l.push(data[i]);return l}for(var h=r;h<c;h++)l.push(data[h]);return l},handlePlayer:function(){this.$refs.play.style.display="none",this.$refs.video.play()},onPanelChange:function(t,e){}}},l=n(61),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[t.isMobile?t._e():o("div",{staticClass:"home-back"},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:16,xs:22}},[o("a-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[o("a-col",{staticClass:"computer",attrs:{lg:10,xs:22}},[o("div",{staticClass:"title-h1__white"},[t._v("\n              "+t._s(t.$t("home.gochain"))+"\n            ")]),t._v(" "),o("div",{staticClass:"home-back-text"},[t._v("\n              "+t._s(t.$t("home.introduce"))+"\n            ")]),t._v(" "),o("div",{staticClass:"home-back-btn"},[o("a",{staticClass:"link-a",attrs:{href:"javascript:;"},on:{click:t.handlePlayer}},[t._v(t._s(t.$t("home.player")))])])]),t._v(" "),o("a-col",{attrs:{lg:12,xs:22}},[o("div",{ref:"videoBox",staticClass:"video"},[o("video",{ref:"video",staticClass:"video-content",attrs:{id:"video",src:"/video/gacvideo.mp4","webkit-playsinline":"true","x5-playsinline":"true",controls:"",muted:"",playsinline:"true",poster:"/video/poster.png"},domProps:{muted:!0}},[t._v("\n                您的浏览器不支持 video 标签。\n              ")]),t._v(" "),o("div",{ref:"play",staticClass:"video-poster",on:{click:t.handleVideo}},[o("img",{attrs:{src:n(850),alt:"612"}})])])])],1),t._v(" "),o("home-second")],1)],1)],1),t._v(" "),t.isMobile?o("div",{staticClass:"mobile"},[o("div",{ref:"videoBox",staticClass:"video"},[o("video",{ref:"video",staticClass:"video-content",attrs:{src:"/video/gacvideo.mp4",playsinline:"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-orientation":"portraint","webkit-playsinline":"true","x-webkit-airplay":"allow",controls:"controls",controlslist:"nodownload noremoteplayback",muted:"",poster:"/video/poster.png"},domProps:{muted:!0}},[t._v("\n        您的浏览器不支持 video 标签。\n      ")]),t._v(" "),o("div",{ref:"play",staticClass:"video-poster",on:{click:t.handleVideo}},[o("img",{attrs:{src:n(850),alt:"612"}})])]),t._v(" "),o("div",{staticClass:"mobile-box"},[o("div",{staticClass:"title-h1__black"},[t._v("\n        "+t._s(t.$t("home.gochain"))+"\n      ")]),t._v(" "),o("div",{staticClass:"home-back-text"},[t._v("\n        "+t._s(t.$t("home.introduce"))+"\n      ")])]),t._v(" "),o("home-second")],1):t._e(),t._v(" "),o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:16,xs:22}},[o("div",{staticClass:"title-h2__black"},[t._v(t._s(t.$t("home.me")))]),t._v(" "),t.isMobile?o("p",[t._v(t._s(t.$t("home.appear")))]):o("p",{staticClass:"home-three-appear"},[t._v(t._s(t.$t("home.appear")))]),t._v(" "),t.isMobile?o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:11,xs:24}},[o("div",{staticClass:"home-three-img"},[o("img",{attrs:{src:n(868),alt:"three"}})])])],1):t._e(),t._v(" "),o("a-row",{attrs:{type:"flex",justify:"space-around"}},[o("a-col",{attrs:{lg:11,xs:24}},[o("h4",{staticClass:"home-three-title-samll",staticStyle:{"padding-left":"10px"}},[t._v("\n            "+t._s(t.$t("home.baas"))+"\n          ")]),t._v(" "),o("p",{staticClass:"home-back-second-content"},[t._v(t._s(t.$t("home-base")))]),t._v(" "),o("div",{staticClass:"home-three-box"},[o("div",{staticClass:"home-three-box-1"},[o("img",{attrs:{src:n(925),alt:"three-1"}}),t._v(" "),o("span",[t._v(t._s(t.$t("home.node")))])]),t._v(" "),o("div",{staticClass:"home-three-box-2"},[o("img",{attrs:{src:n(926),alt:"three-1"}}),t._v(" "),o("span",[t._v(t._s(t.$t("home.check")))])]),t._v(" "),o("div",{staticClass:"home-three-box-3"},[o("img",{attrs:{src:n(927),alt:"three-1"}}),t._v(" "),o("span",[t._v(t._s(t.$t("home.time")))])]),t._v(" "),o("div",{staticClass:"home-three-box-4"},[o("img",{attrs:{src:n(928),alt:"three-1"}}),t._v(" "),o("span",[t._v(t._s(t.$t("home.contact")))])])])]),t._v(" "),t.isMobile?t._e():o("a-col",{attrs:{lg:11,xs:24}},[o("div",{staticClass:"home-three-img"},[o("img",{attrs:{src:n(868),alt:"three"}})])])],1),t._v(" "),o("a-row",{attrs:{type:"flex",justify:"space-around"}},[o("a-col",{attrs:{lg:11,xs:24}},[o("div",{staticClass:"home-three-last"},[o("img",{attrs:{src:n(929),alt:"three-5"}}),t._v(" "),o("div",{staticClass:"home-three-last-content"},[o("h4",{staticClass:"home-three-title-samll"},[t._v("\n                "+t._s(t.$t("home.saas"))+"\n              ")]),t._v(" "),o("div",[t._v(t._s(t.$t("home.trade")))])])])]),t._v(" "),o("a-col",{attrs:{lg:11,xs:24}},[o("div",{staticClass:"home-three-last"},[o("img",{attrs:{src:n(930),alt:"three-6"}}),t._v(" "),o("div",{staticClass:"home-three-last-content"},[o("h4",{staticClass:"home-three-title-samll"},[t._v("\n                "+t._s(t.$t("home.paas"))+"\n              ")]),t._v(" "),o("div",[t._v(t._s(t.$t("home.open")))])])])])],1),t._v(" "),o("div",{staticClass:"home-back-btn home-back-btn-center",style:t.isMobile?t.btnMob:t.btnCom},[o("nuxt-link",{staticClass:"link-a",attrs:{to:{name:"service"}}},[t._v(t._s(t.$t("home.more"))+" >")])],1)],1)],1),t._v(" "),o("div",{staticClass:"home-second",style:t.isMobile?t.backMobile:t.backComputer},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:11,xs:22}},[o("div",{staticClass:"title-h2__white"},[t._v(t._s(t.$t("home.here")))]),t._v(" "),o("p",{staticClass:"home-back-second-content",style:t.isMobile?t.contentMobile:t.contentComputer},[t._v("\n          "+t._s(t.$t("home.go"))+"\n        ")]),t._v(" "),o("div",{staticClass:"home-back-btn-center",staticStyle:{padding:"0"}},[o("a",{staticClass:"link-a-none",style:t.isMobile?t.btnMob1:t.btnCom1,attrs:{target:"_blank",href:"https://github.com/GACHAIN"}},[t._v(t._s(t.$t("home.see")))])])])],1)],1),t._v(" "),o("div",{staticClass:"home-third"},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:16,xs:22}},[o("div",{staticClass:"title-h2__black"},[t._v(t._s(t.$t("home.based")))]),t._v(" "),o("div",{staticClass:"title-h3__black title-h__center",staticStyle:{"padding-bottom":"30px"}},[o("img",{attrs:{src:n(847),alt:"third-4"}}),t._v(" "),o("span",{staticStyle:{padding:"0 10px"}},[t._v(t._s(t.$t("home.nan")))]),t._v(" "),o("img",{attrs:{src:n(848),alt:"third-5"}})]),t._v(" "),o("p",{staticClass:"home-back-second-content",domProps:{innerHTML:t._s(t.$t("home.sha"))}}),t._v(" "),o("p",{staticClass:"home-back-second-content",staticStyle:{"padding-bottom":"30px"},domProps:{innerHTML:t._s(t.$t("home.sha1"))}}),t._v(" "),o("div",{staticClass:"home-third-img"},[o("img",{style:t.isMobile?t.widthMobile:t.widthComputer,attrs:{src:t.isMobile?t.thirdMob:t.thirdCom,alt:"third"}})]),t._v(" "),t.isMobile?o("div",{staticClass:"home-carousel"},[o("swiper-carousel",{attrs:{source:t.pictures}})],1):o("div",{staticClass:"home-carousel"},[o("public-carousel",{attrs:{source:t.pictures}})],1),t._v(" "),o("p",{staticClass:"home-three-title-samll"},[o("img",{attrs:{src:n(847),alt:"third-4"}}),t._v(" "),o("span",[t._v(t._s(t.$t("home.jingdong")))]),t._v(" "),o("img",{attrs:{src:n(848),alt:"third-4"}})]),t._v(" "),o("p",{staticClass:"home-back-second-content"},[t._v(t._s(t.$t("home.wangyi")))]),t._v(" "),o("p",{staticClass:"home-back-second-content"},[t._v(t._s(t.$t("home.info")))]),t._v(" "),t.isMobile?t._e():o("div",{staticClass:"home-third-back"},[o("div",{staticClass:"home-third-back-back"},[o("div",{staticClass:"home-third-back-back-back"})])]),t._v(" "),t.isMobile?o("div",{staticClass:"home-carousel-box"},[o("swiper-carousel",{attrs:{source:t.arrCase}})],1):t._e(),t._v(" "),o("div",{staticClass:"home-back-btn home-back-btn-center",style:t.isMobile?t.imgMobile:t.imgComputer},[o("nuxt-link",{staticClass:"link-a",attrs:{to:{name:"solution"}}},[t._v(t._s(t.$t("home.case"))+" >")])],1)])],1)],1),t._v(" "),o("div",{staticClass:"home-fourth"},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:16,xs:22}},[o("h2",{staticClass:"home-three-title"},[t._v(t._s(t.$t("home.new")))]),t._v(" "),o("new-list"),t._v(" "),o("div",{staticClass:"home-back-btn home-back-btn-center"},[o("nuxt-link",{staticClass:"link-a",attrs:{to:{name:"about",query:{scroll:600}}}},[t._v(t._s(t.$t("home.dong"))+" >")])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"home-fifth"},[o("h2",{staticClass:"home-three-title"},[t._v(t._s(t.$t("home.zhi")))]),t._v(" "),o("div",{staticClass:"about-three-appear"},[t._v(t._s(t.$t("home.one")))]),t._v(" "),t.isMobile?o("div",{staticClass:"mobile"},[o("public-time")],1):o("div",{staticClass:"computer"},[o("public-time")],1)]),t._v(" "),o("div",{staticClass:"home-sixth"},[o("h2",{staticClass:"home-three-title"},[t._v(t._s(t.$t("home.firend")))]),t._v(" "),o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{lg:16,xs:22}},[t.isMobile?o("div",{staticClass:"mobile"},[o("swiper-firend")],1):[o("div",{ref:"drag",staticClass:"home-sixth-box"},[t.icon?o("a-icon",{staticClass:"home-sixth-box-left",class:{disabled:t.isDisableLeft},attrs:{type:"left"},on:{click:t.handleLeft}}):t._e(),t._v(" "),t.icon?o("a-icon",{staticClass:"home-sixth-box-right",class:{disabled:t.isDisableRight},attrs:{type:"right"},on:{click:t.handleRight}}):t._e(),t._v(" "),t._l(t.arrShow,(function(t){return o("a",{key:t.key,staticClass:"home-sixth-box-item",attrs:{href:"javascript:;"}},[o("img",{attrs:{src:t.src,alt:"item.key"}})])}))],2)]],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeSecond:n(948).default,PublicCarousel:n(858).default,SwiperCarousel:n(857).default,NewList:n(949).default,PublicTime:n(856).default,SwiperFirend:n(950).default})}}]);