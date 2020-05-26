---
title: $refs,$emit,$on的使用场景
date: 2020-05-26 09:03:00
tags:
 - vue
categories: 
 - 技术
---

### $emit的使用
+ $emit：触发当前实例上的事件。附加参数都会传给监听器回调。
+ 子组件调用父组件的函数，并且传递数据给父组件

父组件
```vue
<template>
  <div id="app">
    <child-a @my-event="getMyEvent"></child-a>
    <!--父组件中通过监测my-event事件执行一个方法，然后取到子组件中传递过来的值-->
  </div>
</template>
<script>
  import ChildA from './components/child.vue'
  export default {
    components: {
      ChildA
    },
    methods: {
      getMyEvent(msg){
          console.log('接收的数据--------->'+msg)//接收的数据--------->我是子组件中的数据
      }
    }
  }
</script>
```

子组件
```vue
<template>
  <button @click="emitEvent">点击我</button>
</template>
<script>
  export default {
    data() {
      return {
        msg: "我是子组件中的数据"
      }
    },
    methods: {
      emitEvent(){
        this.$emit('my-event', this.msg)
        //通过按钮的点击事件触发方法，然后用$emit触发一个my-event的自定义方法，传递this.msg数据。
      }
    }
  }
</script>
```

props,父组件传递数据或者函数给子组件，子组件用props接收

### refs的使用场景
+ 父组件调用子组件的方法，可以传递数据
+ 使用refs获取到子组件的实例，然后使用它的方法

父组件
```vue
<template>
  <div id="app">
    <child-a ref="child"></child-a>
    <!--用ref给子组件起个名字-->
    <button @click="getMyEvent">点击父组件</button>
  </div>
</template>
<script>
  import ChildA from './components/child.vue'
  export default {
    components: {
      ChildA
    },
    data() {
      return {
        msg: "我是父组件中的数据"
      }
    },
    methods: {
      getMyEvent(){
          this.$refs.child.emitEvent(this.msg);
          //调用子组件的方法，child是上边ref起的名字，emitEvent是子组件的方法。
      }
    }
  }
</script>
```

```vue
<template>
  <button>点击我</button>
</template>
<script>
  export default {
    methods: {
      emitEvent(msg){
        console.log('接收的数据--------->'+msg)//接收的数据--------->我是父组件中的数据
      }
    }
  }
</script>
```

### $on的使用
+ $on：监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
+ 监听事件与被监听事件执行顺序：
  
  1. 监听器 $on 监听到自定义函数后，会首先执行监听器里的函数，
  
  2. 然后再执行 $emit 自定义事件里面的动作 。
+ 兄弟组件之间传递数据
