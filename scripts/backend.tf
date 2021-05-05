terraform {
  backend "azurerm" {
    resource_group_name  = "flixtube-terraform"
    storage_account_name = "flixtubessleeterraform"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
  }
}
