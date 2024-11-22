// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.

use tauri::menu::{MenuBuilder, SubmenuBuilder};

let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let close = CustomMenuItem::new("close".to_string(), "Close");
let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
let menu = Menu::new()
  .add_native_item(MenuItem::Copy)
  .add_item(CustomMenuItem::new("hide", "Hide"))
  .add_submenu(submenu);
            .text("Tauri")
            .separator()
            .check("Is Awesome")

  use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .menu(menu)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}