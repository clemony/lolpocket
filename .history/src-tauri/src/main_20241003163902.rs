// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use tauri::TitleBarStyle;
use window_vibrancy::*;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .setup(|app| {
            // Attempt to get the webview window
            let window = app.get_webview_window("main").unwrap();

            #[cfg(target_os = "macos")]
            {
                // Set title bar style on macOS
                window.set_title_bar_style(TitleBarStyle::Overlay).unwrap();

                // Apply vibrancy if window is valid
                apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, Some(12.0))
                    .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
            }

            #[cfg(target_os = "windows")]
            {
                // Apply blur effect on Windows
                apply_blur(&window, Some((18, 18, 18, 125)))
                    .expect("Unsupported platform! 'apply_blur' is only supported on Windows");
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
/*
fn main() {
  app_lib::run();
}
 */
