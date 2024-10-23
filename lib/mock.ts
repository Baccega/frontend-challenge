// This file should not exist, it's here only because this is a demo and not a real app

// Get name given the id of the stack component
export function getStackComponentName(id: string): string {
  switch (id) {
    case "0c32dddd-0779-4f12-ab61-a9e88b70d434":
      return "default";
    case "1f6a4f4b-9da3-4085-bd25-45a7255be88a":
      return "multi_tenant_kubeflow";
    case "4bfd3527-8cf3-4618-869a-fdc0fcaaac7e":
      return "local_mlflow_tracker";
    case "588be12b-67c5-419b-b042-2886df0fae09":
      return "default";
    case "5ca75f4e-10a3-435c-96fd-e28fe365a500":
      return "gcp_secrets_manager";
    case "676eb0ef-2305-45e1-ae90-e77788926236":
      return "aws_secrets_manager";
    case "7894b82b-5523-4e45-83ca-f2c57ba7b6fa":
      return "gcp_store";
    case "90657abf-3c69-46b7-b164-f8440dd67520":
      return "default";
    case "a088e255-2d42-4324-8544-e54bcb0f98c4":
      return "vertex_ai_orchestrator";
    case "a39279a6-1917-4fcd-b1f8-80ca48007503":
      return "ecr_registry";
    case "ab4e2a49-0634-47ec-a952-5d8cc1dffd75":
      return "deepchecks_data_validator";
    case "b8bfc1ec-c458-427c-9028-a04aa230b41c":
      return "kserve_s3";
    case "c189b257-8f1f-4f32-8fc3-20cc48d32db6":
      return "evidently";
    case "c326e7a8-d185-48ea-a85b-3111bf6e4462":
      return "gcp_registry";
    case "ca5b8c63-9ebb-4eca-bce5-5072500ecd3f":
      return "local_mlflow";
    case "d58e6430-d543-42d1-94ab-199c7c8d1708":
      return "s3_store";
    case "da1429f0-50c8-41a5-bd9c-418d64853a38":
      return "gcp_mlflow_tracker";
    case "e407afb2-c41c-4034-866e-a1af01ee5091":
      return "default";
    case "e48396af-3abe-493a-aa5d-a6c6acf3983e":
      return "aws_secrets_manager2";
    case "f500a2e5-7501-4988-b579-177576bac6e5":
      return "aws_mlflow_tracker";
    default:
      return "default";
  }
}
