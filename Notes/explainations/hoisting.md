| Declaration            | Hoisted? | Initial value during creation | Access before declaration |
| ---------------------- | -------- | ----------------------------- | ------------------------- |
| `var`                  | Yes      | `undefined`                   | ✅ `undefined`             |
| `let`                  | Yes      | Uninitialized (TDZ)           | ❌ `ReferenceError`        |
| `const`                | Yes      | Uninitialized (TDZ)           | ❌ `ReferenceError`        |
| `function` declaration | Yes      | Function object               | ✅ Callable                |


The important point is that **hoisting and usability are different things**.

People often say "`const` is hoisted but not initialized." That sounds contradictory until you understand what the JavaScript engine actually does.

## What happens internally

Consider:

```javascript
console.log(greet);

const greet = function () {};
```

Before any code executes, JavaScript creates an execution context.

During this **creation phase**, it scans all declarations.

For a `const` declaration, it does **not** create the function. Instead, it creates a binding named `greet`.

Conceptually:

```
Creation Phase

greet --> <uninitialized>
```

Notice that the variable **exists**.

Then execution begins.

```
console.log(greet);
```

The engine looks up `greet`.

It finds it.

But its state is still **uninitialized**, so it throws

```
ReferenceError:
Cannot access 'greet' before initialization
```

Later, execution reaches

```javascript
const greet = function () {};
```

Now the binding is initialized:

```
greet --> function () {}
```

From this point onward:

```javascript
greet(); // works
```

---

## Then why hoist it at all?

Because JavaScript needs to know **all lexical declarations** (`let`, `const`, `class`) before execution starts.

Imagine this:

```javascript
{
    console.log(x);
    const x = 10;
}
```

When entering the block, the engine already knows there will be an `x` inside that block.

So it creates the binding immediately.

This prevents it from accidentally using an outer variable.

Example:

```javascript
let x = 100;

{
    console.log(x);
    const x = 10;
}
```

If `const` weren't hoisted, you might expect

```
100
```

because the inner `x` hasn't been reached yet.

But JavaScript deliberately **doesn't allow that**.

Instead, the inner `x` shadows the outer one from the beginning of the block.

```
Outer x = 100

{
    Inner x = <uninitialized>   ← already exists
}
```

So

```javascript
console.log(x);
```

refers to the inner `x`, which isn't initialized yet, producing a `ReferenceError`.

This behavior avoids subtle bugs where a block would sometimes refer to an outer variable before silently switching to an inner one later.

---

## Compare with `var`

```javascript
console.log(x);

var x = 10;
```

Creation phase:

```
x --> undefined
```

Execution:

```
console.log(x); // undefined
x = 10;
```

No error.

---

## Compare with a function declaration

```javascript
hello();

function hello() {}
```

Creation phase:

```
hello --> function object
```

The function object already exists before execution starts, so calling it works.

---

## Summary

| Declaration            | Hoisted? | Initial value during creation | Access before declaration |
| ---------------------- | -------- | ----------------------------- | ------------------------- |
| `var`                  | Yes      | `undefined`                   | ✅ `undefined`             |
| `let`                  | Yes      | Uninitialized (TDZ)           | ❌ `ReferenceError`        |
| `const`                | Yes      | Uninitialized (TDZ)           | ❌ `ReferenceError`        |
| `function` declaration | Yes      | Function object               | ✅ Callable                |

So the point of hoisting `let` and `const` is **not** to let you use them early. It's to let the engine establish the lexical scope completely before execution begins. The TDZ then enforces that those bindings cannot be read until the program reaches their declaration and initializes them.
