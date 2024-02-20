const TerraformString = `
terraform {
    required_providers {
      unicode = {
        //source = "hashicorp.com/edu/hashicups"
        source = "hashicorp.com/edu/unicode"
      }
    }
  }
  
  
  provider "unicode" {
    user = var.user
  }
  
  resource "unicode_app" "halloween2application" {
    name        = "Newest and Greatest Halloween Application"
    description = "Halloween App v2"
    updated_at = "2024-10-31T00:00:00Z"
    created_at = "2023-10-31T00:00:00Z"
  }
  
  resource "unicode_unicode_string" "pumpkin_string" {
    app_id = unicode_app.halloween2application.id
    value  = "🎃"
  }
  resource "unicode_unicode_string" "ghost_string" {
    app_id = unicode_app.halloween2application.id
    value  = "👻"
  }
  resource "unicode_unicode_string" "spider_string" {
    app_id = unicode_app.halloween2application.id
    value  = "🕷️"
  }
  resource "unicode_unicode_string" "candy_string" {
    app_id = unicode_app.halloween2application.id
    value  = "🍬🍭"
  }
  resource "unicode_unicode_string" "bat_string" {
    app_id = unicode_app.halloween2application.id
    value  = "🦇"
  }
  
  resource "unicode_unicode_string" "skull_string" {
    app_id = unicode_app.halloween2application.id
    value  = "💀"
  }
  
  resource "unicode_unicode_string" "witch_string" {
    app_id = unicode_app.halloween2application.id
    value  = "🧙"
  }
`
  .replace(/\n/g, '<br>') // replace newline with <br>
  .replace(/\t/g, '&emsp;') // replace tab with &emsp;
  .replace(/ /g, '&nbsp;'); // replace space with &nbsp;

const VariablesString = `
    variable "user" {
        type    = string
        default = "terry"
    }
`;

export { TerraformString, VariablesString };
