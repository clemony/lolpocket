#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu, Manager};
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};
use objc2::{ msg_send};
use objc2::runtime::Object;

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    let menu = Menu::new()
        .add_native_item(MenuItem::Copy)
        .add_item(CustomMenuItem::new("hide", "Hide"))
        .add_submenu(submenu);

    tauri::Builder::default()
        .menu(menu)
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "macos")]
            {
                let ns_window_result = window.ns_window();
                if let Ok(ns_window) = ns_window_result {
                    let ns_window: *mut Object = ns_window as *mut Object;
                unsafe {
                    // Apply vibrancy
                        apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, Some(0.0))
                        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

                        // Custom rounded corners
                        let _: () = msg_send![ns_window, setTitlebarAppearsTransparent: false];
                        let _: () = msg_send![ns_window, setHasShadow: true];
                        let _: () = msg_send![ns_window, setOpaque: false];
                    
                        // Access the content view of the window
                    let content_view: *mut Object = msg_send![ns_window, contentView];
                    
                        // Set the corner radius
                        let _: () = msg_send![content_view, setWantsLayer: true];
                    let layer: *mut Object = msg_send![content_view, layer];
                        let _: () = msg_send![layer, setCornerRadius: 12.0]; // Adjust the radius as needed
                    }
                }
            }
            
            #[cfg(target_os = "windows")]
            {
                use tauri::api::window::apply_blur;

                apply_blur(&window, Some((18, 18, 18, 125)))
                    .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

