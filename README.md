# 🌦️ Hexagonal Weather App (Node.js + TypeScript)

This project is a simple API that retrieves current weather data from external services (MetaWeather and wttr.in), using **Hexagonal Architecture** (Ports & Adapters) in a modular and scalable way.

---

## 🧱 What is Hexagonal Architecture?

Hexagonal Architecture (also known as Ports and Adapters) separates the business logic from external concerns like APIs, databases, or UI.  
- The **core logic** interacts only through **ports (interfaces)**.
- **Adapters** plug into these ports to handle communication with the outside world.

This makes the application:
- More testable
- Easier to maintain
- Completely decoupled from frameworks or infrastructure

---

## 📁 Project Structure

```
src/
├── domain/                  # Business entities and rules (pure logic)
│   └── Weather.ts
├── port/                    # Interfaces (ports)
│   ├── in/                  # Input ports (what the app can do)
│   └── out/                 # Output ports (what the app needs)
├── application/             # Use cases (application services)
│   └── get-weather.service.ts
├── adapter/
│   ├── in/                  # Inbound adapters (HTTP controllers)
│   │   └── http/
│   └── out/                 # Outbound adapters (API clients)
│       └── weatherapi/
├── config/                  # Dependency injection
│   └── injector.ts
├── main.ts                  # Entry point
```

<!--
---

## 🔌 What are Injectors?

Injectors are the part of the system responsible for wiring everything together.

In `config/injector.ts`, we decide **which implementation** of a port to use based on environment variables. For example:

- `WeatherServiceOutputPort` (interface) can be implemented by:
  - `MetaWeatherOutputAdapter`
  - `WttrInOutputAdapter`

You can switch providers simply by setting the environment variable:

```
WEATHER_PROVIDER=wttr

```
---

 -->



---

## ❓ Common Questions People Have

### 🤔 What's the difference between `domain` and `application`?

> "Isn't the business logic in the use case the same as the domain?"

Not quite. Here's how they differ:

#### 🧠 `domain/` – Pure Business Logic

- Holds **entities**, **value objects**, and **rules** specific to the business.
- It has **no awareness** of external tools like HTTP, databases, or APIs.
- Think of it as the core **vocabulary and rules** of your system.

> The domain is what your business **is**, not what it **does**.

#### ⚙️ `application/` – Use Cases

- Coordinates **actions** using the domain.
- Contains orchestration logic: *how* to do something.
- Talks to the domain and delegates work to ports/adapters.

> The application layer decides how to use the domain to solve a specific problem.

---

### 🗄️ What if I had a database? Are entities part of the domain?

> "If I use a database, are the entities defined in the domain layer?"

Yes, **entities absolutely belong in the domain**.

But here's the distinction:

- The **domain entity** (e.g. `Weather`) defines business **rules**, behavior, and meaning.
- The **database** is just a storage mechanism — it persists the entity, but isn't part of the domain itself.
- You may have **DTOs** or **ORM models** that mirror the entity structure, but they're infrastructure concerns.

**The domain owns the rules. The adapter handles persistence.**

> Think of it like this:
> Domain entity: “I know what a `Weather` means.”
> Adapter: “I know how to save and load it.”

So yes, entities live in the `domain/` folder, and any database-specific representation (like a Prisma/TypeORM model) lives in an adapter.
---

## 🚀 Getting Started

```bash
npm install
npm start
```

Optionally, create a `.env` file:

```
WEATHER_PROVIDER=wttr
```

---

## 🧪 Testing with VS Code

Install the **REST Client** extension and use the following in a `.http` file:

```http
GET http://localhost:3000/api/weather?city=Lisbon
```

---

## ✅ Tech Stack

- Node.js
- TypeScript
- Express
- ts-node
- eslint (Google style)

---

Designed for clarity, modularity, and scalability ✨

---

## ✅ Pros and ❌ Cons of Using Hexagonal Architecture

### ✅ Pros

- **Separation of Concerns**: Keeps business logic isolated from infrastructure.
- **Testability**: Core logic can be tested without involving databases or APIs.
- **Flexibility**: Easily swap out external services (e.g. different weather providers).
- **Scalability**: Supports growing complexity by clean separation of responsibilities.
- **Maintainability**: Clear boundaries make it easier for teams to navigate and change.

### ❌ Cons

- **Initial Overhead**: Requires more structure and boilerplate up front.
- **Learning Curve**: Developers unfamiliar with the architecture may find it harder to get started.
- **Overkill for Small Projects**: Can be too heavy for very simple apps or scripts.
- **Verbosity**: More files, interfaces, and layers than a traditional MVC setup.

> Summary: Hexagonal architecture is a great fit when you want **long-term scalability, clarity, and testability**, but it may feel verbose or complex if you're just prototyping something small.
