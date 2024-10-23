# ZenML Frontend Challenge Q3 2024

This is my solution to the ZenML Frontend Challenge for Q3 2024.

## How to run this project

I've used Node 20.9.0 to develop this project, so I recommend using the same version to avoid any issues (if there are any).

First, install the dependencies:

```bash
pnpm install --frozen-lockfile
```

Then build and run:

```bash
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## My Solution

### Premises

- I believe the code should speak itself, I tend to comment on places where the code I wrote is not self-explanatory (for example because of a bug) or extreamly complex and for "separation purposes". I don't really like to comment on every function you write.
- I'm not a very good designer, so I've tried to keep the design simple and tried to not make it ugly.

### General structure

The app has two main pages:

- **Root page**: The main page of the app, where you can see all the stacks in a summary card with some informations about them. You can click on a stack to see its details.
- **Stack details page**: The page where you can see all the details of a stack, and all the enabled stack components at a glance in the accordion's item title (every type of stack component has it's own accordion). Opening an accordion will show a summary card of every available stack component of that type and clicking it will open a modal showing you the full details of it.

Everything should be responsive (Check out the container queries on the stack summaries in the root page), accessible and resilient. I noticed that the API sometimes fails, but I've handled it gracefully by allowing the user to reload the page (I've disabled the react-query retries to show this, otherwise the users would almost never see any errors and just wait until the backend does not fail, but normally I would leave it on).

### How would I improve this design

To improve the navigation when there are a lot of stacks, I would add a search box and a order/sort by dropdown. A pagination would also make sense to improve performance in this situation.

I would also like to turn things like the `is_shared` icon in the stack details page into a switch (maybe with an confirmation alert) and add the user's avatar and name, because at the moment there are too few informations.

I would like to add some more colors and animations to make the app more visually appealing, but I did not want to over-do it, so I've kept it simple.

### Compromises

I've made some decisions that I would not never make in a real-world project, but I did it to save time and because I think it's not the focus of the challenge. Here are some of them:

- Only worked on `main` branch: I've worked alone, no need to waste time branching
- No tests: I felt like it was not the focus of the challenge
- `mock.ts`: This file exist because I could not change the API I was consuming (I needed the name alongside the ids of the stack components), so instead of making another request to get the name, confuse my code in the process and waste time, I've decided to just add the names directly in the mock file.
- I've prevented retries on the react-query client, because you could not see the handled errors otherwise (And I thought you wanted to see them).
- I could only see the data that was shared with me, so the types definitions of the configurations are definitely wrong (I've set some of them to only null, but of course that does not make sense)

There are also some other minor compromises in the code, but there are dedicated comments in the code explaining them.

### Technologies (and why I chose them)

- **Next.js**: I chose Next.js because it's a great framework for building React applications, I've used Server Components with the App router, dynamic routes and the project is ready for Partial Pre-rendering.
- **Tailwind CSS**: My go-to CSS framework, provides a coherent design system and it scales really well.
- **Shadcn/ui**: My favorite component library, I love that I just change the components directly to my needs without jumping through hoops (like with Material UI for example) and how they implement **cva**.
- **React query**: I refuse to write another vanilla `fetch` in my React code, it's just bad, react query solves that problem and more.
- **Zod**: Extremely useful for validating data that comes from the server and make sure it's in the shape you are expecting. it also works well with **React Hook Form**, but this app did not really need any forms. BTW every data that comes from the server in this app is fully validated and type safe.
- **Eslint + Prettier**: Basically the current industry standard, Biome is a nice replacement though

### Bonus Points

> 1. How would you add the remaining CRUD operations (create, update, and delete) for a stack and stack component to your application?

I would add:

- **To add a new stack**: A "+" button before the stack list on the root page aligned to the right, that would open a modal with a form to create a new stack (where you would input at least the name). After submitting there would be a redirect to the new stack details page.
- **To remove a stack**: A "Delete" button on the stack details page (beside the name of the stack), that would open an alert dialog asking for confirmation. After confirming, the user would be redirected to the root page.
- **To update a stack**: A "Edit" button on the stack details page (alongside the delete button), that would open a modal similar to the "add a new stack", or .by putting the inputs in the stack details page itself and add a "save" button when a user changes something.
- **To add a stack component**: A new card inside of every accordion in the stack details page, with a "+" button that would open a modal with a form to create a new stack component (where you would input at least the name).
- **To remove a stack component**: A "Delete" button in the stack component modal
- **To update a stack component**: Make the stack component dialog's table editable and add a save and a reset button.

It would make sense to add a state management library like **Zustand**, so that we can easily handle optimistic CRUD operations without the need refreshing the page.

I would also like to turn things like the `is_shared` icon into a switch in the stack details page (maybe with an confirmation alert) and add a sort of "selected" switch in the stack component dialog's table.

> 2. How would you handle a token or a cookie, in case the API would need authentication?

I would handle it with a JWT in the cookies. The main reason to not put it in `localStorage` is because Next.js server components would not work with it, but it can with cookies. To implement it, I would add the `Authorization: Bearer <token>` header to the fetch requests on the `queryFn` of react-query, and try to make it so I don't have to add it manually every time for every request (if it makes sense).

> 3. Given that some features are open-source and some are not, how would you approach separating and integrating open and closed-source features?

Generally I would just separate the open-source features (or the closed source features) in a different repository and install them though a private npm package. Of course you need to give a proper license to the open-source repository, to make sure you can use it in your closed source project. I also saw that there are some tools that can help with this, without the need for a refactor (see [link](https://blog.bitsrc.io/how-to-open-source-parts-of-your-private-project-with-bit-113cc2e1af9c)), but I have never used them.
