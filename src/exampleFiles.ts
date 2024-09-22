export const demo1File = `
import (
  "std/faas"
)

use {
  function = faas.function
  provider = faas.provider
  application = faas.application
}

struct Payload {
  code = int
  message = string
}

@function Hello {
  runtime = "nodejs:16"
  codeDir = "./code"
  triggers = [
    {
      name = "http"
      kind = "http"
      method = "get"
      path = "/"
    }
  ]
  resource = {
    cpu = "1024m"
    memory = "128Mi"
  }
}

@application {
  functions = [Hello]
  defaultProvider = OpenFaasCluster1
}

@provider OpenFaasCluster1 {
  kind = "openfaas"
  gateway = "https://openfaas-cluster-1.xxx.com"
}

@provider AliyunTestCluster {
  kind = "aliyun"
}
`
