(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{zOsG:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=(l("B2uJ"),l("+su7"),l("qOys")),i=l.n(r);l("5Yjd");t["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"pullrefresh-\u4e0b\u62c9\u5237\u65b0\u7ec4\u4ef6"},a.a.createElement("a",{"aria-hidden":"true",href:"#pullrefresh-\u4e0b\u62c9\u5237\u65b0\u7ec4\u4ef6"},a.a.createElement("span",{className:"icon icon-link"})),"PullRefresh \u4e0b\u62c9\u5237\u65b0\u7ec4\u4ef6"),a.a.createElement("h2",{id:"\u6548\u679c\u6f14\u793a"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u6548\u679c\u6f14\u793a"},a.a.createElement("span",{className:"icon icon-link"})),"\u6548\u679c\u6f14\u793a"),a.a.createElement(i.a,{code:"const content = (\n  <>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red', backgroundColor: 'white' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red' }}>\n      <Text>123123</Text>\n    </View>\n  </>\n);\n",lang:"tsx"}),a.a.createElement("h3",{id:"1-scrollview--\u666e\u901a\u5237\u65b0\u7ec4\u4ef6"},a.a.createElement("a",{"aria-hidden":"true",href:"#1-scrollview--\u666e\u901a\u5237\u65b0\u7ec4\u4ef6"},a.a.createElement("span",{className:"icon icon-link"})),"1. ScrollView + \u666e\u901a\u5237\u65b0\u7ec4\u4ef6"),a.a.createElement(i.a,{code:"<PullRefresh\n  refreshComponent={\n    <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>\n      <ActivityIndicator />\n    </View>\n  }\n  onRefresh={handleRefresh}\n  onProgress={setProgress}\n>\n  {content}\n</PullRefresh>\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:750}},a.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608121429992107259.gif",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607430991524&di=24c0bf75a6d0efeff1c48e13829eca72&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201308%2F23%2F220651x9b0h4kru904ozre.jpg",style:{width:375,border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"2-scrollview--lottie-\u52a8\u753b"},a.a.createElement("a",{"aria-hidden":"true",href:"#2-scrollview--lottie-\u52a8\u753b"},a.a.createElement("span",{className:"icon icon-link"})),"2. ScrollView + Lottie \u52a8\u753b"),a.a.createElement(i.a,{code:"const [progress, setProgress] = useState(0);\nconst lottieViewRef = useRef<LottieView>(null);\n\n<PullRefresh\n  refreshComponent={\n    <LottieView\n      style={{ height: 60 }}\n      ref={lottieViewRef}\n      source={loadingAnimation}\n      progress={progress}\n      autoSize\n      loop\n    />\n  }\n  onRefresh={async () => {\n    lottieViewRef.current!.play();\n    await handleRefresh();\n    lottieViewRef.current!.reset();\n  }}\n  onProgress={setProgress}\n>\n  {content}\n</PullRefresh>;\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:750}},a.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608121575330094035.gif",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607430991524&di=24c0bf75a6d0efeff1c48e13829eca72&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201308%2F23%2F220651x9b0h4kru904ozre.jpg",style:{width:375,border:"1px solid #ddd"}}))),a.a.createElement("h3",{id:"3-flatlist--lottie-\u52a8\u753b"},a.a.createElement("a",{"aria-hidden":"true",href:"#3-flatlist--lottie-\u52a8\u753b"},a.a.createElement("span",{className:"icon icon-link"})),"3. FlatList + Lottie \u52a8\u753b"),a.a.createElement(i.a,{code:"const [progress, setProgress] = useState(0);\nconst lottieViewRef = useRef<LottieView>(null);\n\n<PullRefresh<{ id: number; label: string }>\n  scrollComponent=\"FlatList\"\n  refreshComponent={\n    <LottieView\n      style={{ height: 60 }}\n      ref={lottieViewRef}\n      source={loadingAnimation}\n      progress={progress}\n      autoSize\n      loop\n    />\n  }\n  onRefresh={async () => {\n    lottieViewRef.current!.play();\n    await handleRefresh();\n    lottieViewRef.current!.reset();\n  }}\n  onProgress={setProgress}\n  data={Array(10)\n    .fill('')\n    .map((_, index) => ({ id: index + 1, label: `hahaha${index + 1}` }))}\n  renderItem={({ item }) => (\n    <View style={{ paddingVertical: 30, borderWidth: 1, borderColor: 'red', backgroundColor: 'white' }}>\n      <Text>{item.label}</Text>\n    </View>\n  )}\n  keyExtractor={item => item.id.toString()}\n/>;\n",lang:"tsx"}),a.a.createElement("center",null,a.a.createElement("div",{style:{display:"flex",width:750}},a.a.createElement("div",{style:{width:375}},"IOS\u6548\u679c\u56fe"),a.a.createElement("div",{style:{width:375}},"Android\u6548\u679c\u56fe"))),a.a.createElement("center",null,a.a.createElement("figure",null,a.a.createElement("img",{alt:"",src:"https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1608121788620647345.gif",style:{width:375,marginRight:10,border:"1px solid #ddd"}}),a.a.createElement("img",{alt:"",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607430991524&di=24c0bf75a6d0efeff1c48e13829eca72&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201308%2F23%2F220651x9b0h4kru904ozre.jpg",style:{width:375,border:"1px solid #ddd"}}))),a.a.createElement("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u6ce8\u610f\u4e8b\u9879"},a.a.createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f\u4e8b\u9879"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u914d\u5408 Lottie \u52a8\u753b\u65f6\uff0c\u5fc5\u987b\u8981\u4f20",a.a.createElement("code",null,"onProgress"),"\uff0c\u8fd9\u6837\u624d\u80fd\u62ff\u5230\u4e0b\u62c9\u6bd4\u4f8b\u4f20\u7ed9 Lottie \u52a8\u753b\uff0c\u7528\u6765\u5b9e\u73b0\u5728\u62d6\u52a8\u65f6 Lottie \u4f1a\u968f\u7740\u4e00\u8d77\u6539\u53d8\u7684\u6548\u679c\u3002"),a.a.createElement("li",null,"\u4f7f\u7528 Lottie \u52a8\u753b\u65f6\uff0c",a.a.createElement("code",null,"onRefresh")," \u9700\u8981\u589e\u52a0\u5bf9\u52a8\u753b\u5f00\u59cb\u548c\u91cd\u7f6e\u7684\u652f\u6301\u3002\u4ee3\u7801\u5982\u4e0a\u6240\u793a\u3002")),a.a.createElement("h2",{id:"api"},a.a.createElement("a",{"aria-hidden":"true",href:"#api"},a.a.createElement("span",{className:"icon icon-link"})),"API"),a.a.createElement("p",null,"\u5c5e\u6027\u7ee7\u627f\u81ea"),a.a.createElement("p",null,a.a.createElement("a",{href:"https://reactnative.dev/docs/scrollview",target:"_blank",rel:"noopener noreferrer"},"https://reactnative.dev/docs/scrollview",a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},a.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),a.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),a.a.createElement("p",null,a.a.createElement("a",{href:"https://reactnative.dev/docs/flatlist",target:"_blank",rel:"noopener noreferrer"},"https://reactnative.dev/docs/flatlist",a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},a.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),a.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u5fc5\u586b"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"scrollComponent"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6eda\u52a8\u7ec4\u4ef6\u7c7b\u578b"),a.a.createElement("td",null,a.a.createElement("code",null,"ScrollView")," | ",a.a.createElement("code",null,"FlatList")),a.a.createElement("td",null,a.a.createElement("code",null,"ScrollView"))),a.a.createElement("tr",null,a.a.createElement("td",null,"refreshComponent"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u4f20\u5165\u7684\u81ea\u5b9a\u4e49\u5237\u65b0\u7ec4\u4ef6"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"``")),a.a.createElement("tr",null,a.a.createElement("td",null,"refreshTriggerHeight"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u89e6\u53d1\u5237\u65b0\u7684\u9ad8\u5ea6"),a.a.createElement("td",null,a.a.createElement("code",null,"number")),a.a.createElement("td",null,a.a.createElement("code",null,"60"))),a.a.createElement("tr",null,a.a.createElement("td",null,"onProgress"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u6eda\u52a8\u8fc7\u7a0b\u62ff\u5230\u6eda\u52a8\u767e\u5206\u6bd4"),a.a.createElement("td",null,a.a.createElement("code",null,"(progress: number) => void")),a.a.createElement("td",null,"``")),a.a.createElement("tr",null,a.a.createElement("td",null,"onRefresh"),a.a.createElement("td",null,a.a.createElement("code",null,"true")),a.a.createElement("td",null,"\u624b\u52bf\u91ca\u653e\u4e4b\u540e\u89e6\u53d1\u7684\u5237\u65b0\u65b9\u6cd5"),a.a.createElement("td",null,a.a.createElement("code",null,"() => Promise")),a.a.createElement("td",null,"``")),a.a.createElement("tr",null,a.a.createElement("td",null,"children"),a.a.createElement("td",null,a.a.createElement("code",null,"false")),a.a.createElement("td",null,"\u5b50\u7ec4\u4ef6"),a.a.createElement("td",null,a.a.createElement("code",null,"ReactNode")),a.a.createElement("td",null,"``"))))))}}}]);