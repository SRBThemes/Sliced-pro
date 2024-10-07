/*
-------------------------------------------------------------------------
* Template Name    : Sliced - Tailwind CSS Admin & Dashboard Template   * 
* Author           : SRBThemes                                          *
* Version          : 1.0.0                                              *
* Created          : May 2024                                           *
* File Description : Main Js file of the template                       *
*------------------------------------------------------------------------
*/

(function () {
    ("use strict");

    document.addEventListener("alpine:init", () => {
        Alpine.data("collapse", () => ({
            collapse: false,

            collapseSidebar() {
                this.collapse = !this.collapse;
            },
        }));
        Alpine.data("dropdown", (initialOpenState = false) => ({
            open: initialOpenState,

            toggle() {
                this.open = !this.open;
            },
        }));
        Alpine.data("modals", (initialOpenState = false) => ({
            open: initialOpenState,
            toggle() {
                this.open = !this.open;
            },
        }));

        // main - custom functions
        Alpine.data("main", (value) => { });

        Alpine.store("app", {
            // sidebar
            sidebar: false,
            toggleSidebar() {
                this.sidebar = !this.sidebar;
            },
            // Light and dark Mode
            mode: Alpine.$persist('light'),
            sidebarMode: Alpine.$persist('light'),
            layout: Alpine.$persist('vertical'),
            direction: Alpine.$persist('ltr'),
            showSettings: false,
            toggleMode(val) {
                if (!val) {
                    val = this.mode || "light"; // light And Dark

                }
                this.mode = val;

            },

            toggleFullScreen() {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    document.documentElement.requestFullscreen();
                }
            },

            setLayout() {
                // Set the layout based on current settings
                this.layout = this.layout || 'vertical';
                this.mode = this.mode || 'light';
                this.sidebarMode = this.sidebarMode || 'light';
                this.direction = this.direction || 'ltr';
                this.open = false;
            },

            resetLayout() {
                // Reset to default layout settings
                this.layout = 'vertical';
                this.mode = 'light';
                this.sidebarMode = 'light';
                this.direction = 'ltr';
                this.open = false;
            }
        });



        // sidebar menu activation

        const activeMenuFromStorage = localStorage.getItem('activeMenu') || '';
        const activeSubMenuFromStorage = localStorage.getItem('activeSubMenu') || '';

        Alpine.store('sidebar', {
            activeMenu: activeMenuFromStorage,
            activeSubMenu: activeSubMenuFromStorage, // Retrieve submenu state
            toggleMenu(menu, isSubmenu = false) {
                const currentPath = window.location.pathname; // Get the current path
            
                if (isSubmenu) {
                    // Check if the current path matches the parent menu's path
                    console.log(this.activeMenu , "sdfsdfgsggggggggg");
                    
                    if (this.activeMenu && this.activeMenu === this.getParentMenu(currentPath)) {
                        this.activeSubMenu = this.activeSubMenu === menu ? '' : menu;
                        localStorage.setItem('activeSubMenu', this.activeSubMenu);
                        console.log("Submenu toggled:", this.activeSubMenu);
                    }
                } else {
                    // Toggle the main menu
                    const isSameMenu = this.activeMenu === menu;
            
                    // Set the main menu and reset the submenu only if a new main menu is clicked
                    this.activeMenu = isSameMenu ? '' : menu;
                    localStorage.setItem('activeMenu', this.activeMenu);
            
                    if (!isSameMenu) {
                        // Only reset the submenu when switching to a new main menu
                        this.activeSubMenu = '';
                        localStorage.removeItem('activeSubMenu');
                    }
                    console.log("Main menu toggled:", this.activeMenu);
                }
            },
            
            getParentMenu() {
                // Define the logic to determine which menu is the parent based on the current path
                // For example, if you have an object mapping paths to menus
                
                
                return this.activeMenu;
            },

            isSubMenuActive(menu) {
                return this.activeSubMenu === menu;
            }
        });

        function setActiveClass() {
            var currentPath = window.location.pathname;
            currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1); // Extract last part of the path
            var activeItem = document.querySelector('.sidebar ul li a[href="' + currentPath + '"]');
            
            console.log("activeItem", activeItem, 'currentPath', currentPath);
            
            if (activeItem) {
                activeItem.classList.add('active');
        
                // Find the parent menu of the activeItem
                let parentMenu = activeItem.closest('li'); // Get the closest parent <li>
        
                // Traverse up the DOM tree to find the parent menu
                while (parentMenu) {
                    if (parentMenu.classList.contains('submenu')) {
                        parentMenu.classList.add('active'); // Add active class to the parent menu if it has submenu
                        // Optionally, set the active submenu in your Alpine store
                        const submenuName = activeItem.textContent.trim(); // Get the submenu name
                        Alpine.store('sidebar').activeSubMenu = submenuName;
                        localStorage.setItem('activeSubMenu', submenuName);
                        break; // Exit loop if parent is found
                    }
                    parentMenu = parentMenu.parentElement.closest('li'); // Move to the next parent <li>
                }
        
                // Optionally, you can also set the active main menu
                const mainMenuItem = activeItem.closest('li.main-menu'); // Assuming main menu items have class 'main-menu'
                if (mainMenuItem) {
                    const mainMenuName = mainMenuItem.querySelector('a').textContent.trim();
                    Alpine.store('sidebar').activeMenu = mainMenuName;
                    localStorage.setItem('activeMenu', mainMenuName);
                }
            }
        }

        Alpine.data('sidebarMenu', () => ({
            init() {
                setActiveClass();
            },
            isActive(menu) {

                return this.$store.sidebar.activeMenu === menu;
            },
            isSubMenuActive(menu) {
                return this.$store.sidebar.activeSubMenu === menu;
            },
            toggle(menu, isSubmenu) {
                console.log(" function called");

                this.$store.sidebar.toggleMenu(menu, isSubmenu);
            }
        }));
    });

    window.Alpine.start();

})();
