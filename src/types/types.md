## Types don’t need JSX, and .tsx exists only to support JSX.

So:

- **.ts → logic, types, utilities**
- **.tsx → React components (JSX)**

## 1️⃣ Service file naming (BEST PRACTICE)

## ✅ Use kebab-case and suffix with .service.ts

```js
user.service.ts
employee.service.ts
account.service.ts
auth.service.ts
case.service.ts
payment.service.ts
```

## ✅ Core Rule (Simple & Consistent)

- **Services = verbs (actions)**
- **Types = nouns (entities)**
- **Components = UI concepts**

## Rule to remember 🧠

- **If it talks to the backend → it’s a service**
- **If it renders JSX → it’s a component**
- **If it describes data → it’s a type**
