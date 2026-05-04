/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    runtime: {
      env: {
        PAYLOAD_CMS?: { fetch: (req: Request) => Promise<Response> }
        IMAGES?: any
        [key: string]: any
      }
      ctx: {
        waitUntil: (promise: Promise<any>) => void
      }
    }
  }
}
