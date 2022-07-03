# 关于JS预解析的经典题目

##### By : MuFen

##### 原创



咱们先来看看一段代码：

```javascript
    fun()
    console.log(c);
    console.log(b);
    console.log(a);
    function fun(){
        var a = b = c = 9
        console.log(a);
        console.log(b);
        console.log(c);
    }
```

怎么样？看着是不是有点乱？咱们慢慢解



首先我们知道JS的预解析会把当前作用域声明的函数和变量提升到最前面。

那么我们就直接把函数移到最前边：

```javascript
    function fun(){
        var a = b = c = 9
        console.log(a);
        console.log(b);
        console.log(c);
    }
    
    fun()
    console.log(c);
    console.log(b);
    console.log(a);
```

然后再看那堆奇奇怪怪的声明变量

```javascript
var a = b = c = 9
```

这个时候有些人可能会把这行代码认为是：

```javascript
var a = 9 ,var b = 9 , var c = 9
```

这样就掉坑里了，其实它是这样的

```javascript
var a = 9 , b = 9 , c = 9
//b和c并没有被声明
```

我们都知道js未被声明但是被赋值的变量会放在全局变量里

那么我们解析一下，函数fun使用了b和c，但是b和c并不在这个函数的局部变量里，那么函数fun就会顺着作用域链往上找，于是乎就找到全局作用域，那么我们的代码就可以这样理解：

```javascript
    var b = 9;
	var c = 9;

	function fun(){
        var a = 9
        console.log(a);
        console.log(b);	//此处的b往上层寻找，最后找到b=9，输出9
        console.log(c);	//同理
    }
    
    fun()
    console.log(c);
    console.log(b);
    console.log(a);
```

那么函数内部的输出结果我们就知道了，但是外部的输出呢？继续解析：

```javascript
//由上可知b和c是全局作用域的变量，那么可以理解成
    var b = 9;
	var c = 9;

    console.log(c); //c=9
    console.log(b);	//b=9
    console.log(a);	//由于a在函数fun的局部变量中，在外层没法使用这个变量，所以提示a is not defined（变量a未被定义）
```

所以输出结果是：

```javascript
    function fun(){
        var a = b = c = 9
        console.log(a); 		//9
        console.log(b);			//9
        console.log(c);			//9
    }
    
    fun()
    console.log(c);				//9
    console.log(b);				//9
    console.log(a);				//报错
```

(实际开发中写出这种代码的估计会被追着打吧)