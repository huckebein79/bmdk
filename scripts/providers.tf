terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "1.38.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "1.10.0"
    }
    null = {
      source  = "hashicorp/null"
      version = "2.1.2"
    }
  }
}

provider "azurerm" {
  # Configuration options
}

provider "kubernetes" {
  host = azurerm_kubernetes_cluster.cluster.kube_config[0].host

  client_certificate     = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].client_certificate)
  client_key             = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].client_key)
  cluster_ca_certificate = base64decode(azurerm_kubernetes_cluster.cluster.kube_config[0].cluster_ca_certificate)
}

provider "null" {

}