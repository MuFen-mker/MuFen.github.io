# 使用构造函数时new关键字做了什么

##### By : MuFen

一步步解析

1,创建在内存中创建一个空对象

```javascript
    function obj(a,b){			
        this.obj = a
        this.obj = b
        this.fun = function(c){
            console.log(c);
        }
    }
    let obj1 = new obj(1,2)		//1.调用构造函数，并创建一个空对象:obj1
```

2,this指向刚刚创建的空对象

```javascript
    function obj(a,b){			
        this.obj = a				//2.构造函数中的this全部指向obj1
        this.obj = b
        this.fun = function(c){
            console.log(c);
        }
    }
    let obj1 = new obj(1,2)
```

3,执行构造函数里的代码，给这个空对象添加属性和方法

```javascript
    function obj(a,b){				//3.开始执行构造函数obj里的代码，形参a = 1,b = 2
        this.obj = a				//将属性a = 1存入对象obj1
        this.obj = b				//将属性b = 2存入对象obj1
        this.fun = function(c){		//将方法fun存入对象obj1
            console.log(c);
        }
    }
    let obj1 = new obj(1,2)			//两个实参
```

4,返回这个对象

```javascript
//4.返回这个对象
//即使没有return，new关键字也能帮我们返回这个对象
    function obj(a,b){			
        this.obj = a				
        this.obj = b				
        this.fun = function(c){		
            console.log(c);
        }
    }
    let obj1 = new obj(1,2)		//此时obj1 = {a:1, b:2 , fun:function(c){console.log(c)}}
```

