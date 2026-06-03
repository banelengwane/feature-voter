# Product Feature Request Board 🚀

A responsive, full-stack web application built using a decoupled architecture. This repository serves as an intermediate portfolio project demonstrating asynchronous data flow, object-relational mapping, custom API modularization, and fluid multi-breakpoint responsive design.

---

## 🏗️ Architecture Overview

The application is completely decoupled, separating concerns between a client-side layout and a type-safe relational server.

* **Frontend:** A component-driven React single-page application (SPA) structured around a centralized asynchronous API service layer. It utilizes modern layouts built via CSS Grid and Flexbox.
* **Backend:** A scalable .NET Core Web API leveraging Entity Framework Core (EF Core) as an Object-Relational Mapper (ORM).
* **Database:** Persistent relational storage powered by PostgreSQL/SQL Server, managed via code-first database migrations.

---

## 🛠️ Tech Stack & Technical Highlights

### Frontend
- **ReactJS (Vite):** Utilizes structured functional components, strict state lifecycle hooks (`useState`, `useEffect`), and clean component communication.
- **Isolated Service Layer:** Network fetching logic is completely abstracted out of rendering layouts into an exclusive API engine (`src/services/api.js`).
- **Advanced CSS Paradigms:** Implements CSS Grid for dual-column desktop canvas scaling, Flexbox for alignment mapping, and strict CSS Media Queries for a native-feeling breakdown on Tablet and Mobile screens.

### Backend
- **.NET Core Web API:** Built with asynchronous controller endpoints (`async/await`) to ensure non-blocking thread operations during heavy I/O database calls.
- **Entity Framework Core:** Handles object mapping, data context safety, and dynamic entry mutations tracking.
- **Cross-Origin Resource Sharing (CORS):** Explicitly configured middleware policies allowing secure data transfers between independent runtime ports.

---

## 📦 Database Setup & Schema

The underlying database tracks entities using a strongly-typed Model definition containing parameters for tracking entity IDs, user input text strings, atomic upvote counters, and automated UTC timestamps.

### C# Domain Entity Definition
```csharp
public class FeatureRequest
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int Upvotes { get; set; } = 0;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}```

### Prerequisite Clecklist
- .Net Core SDK
- Node.js & npm
- Running instance of PostgreSQL or SQL Server

### To Run locally 
cd FeatureVoter.Api

Open appsettings.json and adjust the connection string configurations to match your local settings

"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Database=feature_voter_db;Username=YOUR_USERNAME;Password=YOUR_PASSWORD"
}

- Execute EF Core code-first db migrations to construct the target tables inside your db systems using:
dotnet ef database update

- Boot up the .net runtime engine:
dotnet run

### Frontend connection
cd ../feature-voter-client
npm install
npm run dev