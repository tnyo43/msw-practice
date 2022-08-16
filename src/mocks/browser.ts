import { setupWorker, SetupWorkerApi } from "msw"
import { handlers } from "./handlers"

export * from "msw"

const worker: SetupWorkerApi = setupWorker(...handlers)

export async function startMockWorker() {
  await worker.start()
}
