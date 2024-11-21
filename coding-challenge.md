# Frontend Engineer - Coding Challenge

Your task is to create a frontend application that visualizes the contents of the REST API hosted publically here:

[Click here to go to API docs](https://zenml-frontend-challenge-backend.fly.dev/docs).

The API is a FastAPI python application that manages a publically maintained list of so-called `stacks` (accessible via the `GET /stacks` method). A `stack` is simply a combination of various configurations of infrastructure, namely `stack components`.

A `stack` consists of a series of `stack components`. A `stack component` can be thought of as a simple configuration. For example, here is a configuration of a stack component:

```json
{
  "id": "1f6a4f4b-9da3-4085-bd25-45a7255be88a",
  "created": "2022-11-23T15:14:43",
  "updated": "2022-11-23T15:14:43",
  "user": "ef99200c-807a-4efa-b006-303462d6680c",
  "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
  "is_shared": false,
  "name": "multi_tenant_kubeflow",
  "type": "orchestrator",
  "flavor": "kubeflow",
  "configuration": {
    "synchronous": false,
    "timeout": 1200,
    "client_args": {},
    "user_namespace": null,
    "node_selectors": {},
    "node_affinity": {},
    "pod_settings": null,
    "kubeflow_pipelines_ui_port": 8080,
    "kubeflow_hostname": "https://www.myshowcase.zenml.io/pipeline",
    "kubeflow_namespace": "kubeflow",
    "kubernetes_context": "zenml-cluster",
    "skip_local_validations": false,
    "skip_cluster_provisioning": false,
    "skip_ui_daemon_provisioning": false
  }
}
```

Every stack component always has an `id`, `name`, `type`, and a `flavor`. For example, the above stack component is of type `orchestrator` and flavor `kubeflow`, with id `1f6a4f4b-9da3-4085-bd25-45a7255be88a` and name `multi_tenant_kubeflow`. The id and name of a stack component is unique. The `configuration` property is a dictionary of primitive data types like an `int`, `string`, `file`, `dict`, and is dynamic for every type and flavor (i.e. not every stack component has a `gpu_limit` configuration property).

A stack also has a unique id and name and can be created by combining different stack components of different types. For example, one can create a stack that has two stack components: One type `orchestrator` of flavor `kubeflow` and one type `artifact store` of flavor `gcp`. One `stack component` can be part of many `stacks`. Here is an example of a stack consisting of 2 stack components:

```json
{
  "id": "125f317c-1bcf-4497-905d-857b72108af5",
  "created": "2022-11-22T12:34:40",
  "updated": "2022-11-22T12:34:40",
  "user": "ef99200c-807a-4efa-b006-303462d6680c",
  "project": "8f55ff0d-bfbd-479c-a7d4-60af51236203",
  "is_shared": false,
  "name": "my_stack",
  "description": "This is my stack",
  "components": {
    "artifact_store": ["0c32dddd-0779-4f12-ab61-a9e88b70d434"],
    "orchestrator": ["1f6a4f4b-9da3-4085-bd25-45a7255be88a"]
  }
}
```

At a minimum, every stack needs to consist of two stack component types, the `orchestrator` and the `artifact store`. You can also add 6-8 other types of stack component types optionally to a stack. There may be cases of having more than one type of stack component in a stack, but this is usually **NOT** the case.

As you can also see, there are other properties in the stack and stack components like `user`, `project`, `is_shared` etc. You can choose to ignore these properties or make reasonable assumptions about them as you develop your application.

The frontend application you are designing should give the user the ability to navigate these stacks and stack components.
We leave it completely up to you as to how you would manage this user experience. However, please keep in mind the following questions:

- What is an ideal way to visualize a stack and a stack component?
- What is the easiest way to navigate these stacks and stack components when they are many of them?
- How does one showcase the connection between a stack and its stack components?
- In your role as the frontend developer, how can you construct a UI that's prepared for the future? For instance, if the API were to incorporate extra functionalities in the future, such as creating stacks and stack components, how much adjustment would the UI demand to seamlessly embrace these potential new features?

Please showcase the answers to the above questions by creating an application that utilizes the API's endpoints and enables users to interact with it in a read-only manner. Please also create a `README.md` file in which you reason through your thought process and describe clearly how you constructed your application. Note down any assumptions you made along the way.

**Note**:
Please use TypeScript for your project. Besides that, you can use any tool or library you like for building your application, but we suggest using React as this is the library of choice for building frontend applications at ZenML. Additionally, feel free to use any other third-party library you wish, including frameworks like Next.js or CSS libraries like Tailwind.
