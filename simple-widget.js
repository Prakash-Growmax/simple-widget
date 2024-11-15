(function() {
    // Create the widget HTML
    function createWidget() {
        const widget = document.createElement("div");
        widget.innerHTML = `
                <div id="fab-widget" 
                     style="position: fixed; 
                            bottom: 20px; 
                            right: 20px; 
                            z-index: 9999;">
                    <div class="fab-main-button" 
                         style="width: 60px;
                                height: 60px;
                                background: #4CAF50;
                                border-radius: 50%;
                                box-shadow: 0 2px 12px rgba(0,0,0,0.2);
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transition: transform 0.3s ease;">
                        <span style="color: white; font-size: 24px;">+</span>
                    </div>
                    <div class="fab-menu" 
                         style="position: absolute;
                                bottom: 70px;
                                right: 0;
                                background: white;
                                border-radius: 8px;
                                box-shadow: 0 2px 12px rgba(0,0,0,0.1);
                                padding: 8px 0;
                                display: none;
                                min-width: 150px;">
                        <div class="fab-menu-item" 
                             onclick="window.FabWidget.handleAction('chat')"
                             style="padding: 8px 16px;
                                    cursor: pointer;
                                    font-family: Arial, sans-serif;
                                    font-size: 14px;">
                            💬 Start Chat
                        </div>
                        <div class="fab-menu-item"
                             onclick="window.FabWidget.handleAction('email')"
                             style="padding: 8px 16px;
                                    cursor: pointer;
                                    font-family: Arial, sans-serif;
                                    font-size: 14px;">
                            ✉️ Email Us
                        </div>
                        <div class="fab-menu-item"
                             onclick="window.FabWidget.handleAction('call')"
                             style="padding: 8px 16px;
                                    cursor: pointer;
                                    font-family: Arial, sans-serif;
                                    font-size: 14px;">
                            📞 Call Us
                        </div>
                    </div>
                </div>`;
        document.body.appendChild(widget);

        // Add hover effects
        const menuItems = widget.getElementsByClassName("fab-menu-item");
        Array.from(menuItems).forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = "#f5f5f5";
            });
            item.addEventListener("mouseout", () => {
                item.style.backgroundColor = "white";
            });
        });

        // Add click handler
        const mainButton = widget.querySelector(".fab-main-button");
        const menu = widget.querySelector(".fab-menu");
        let isOpen = false;

        mainButton.addEventListener("click", () => {
            isOpen = !isOpen;
            menu.style.display = isOpen ? "block" : "none";
            mainButton.style.transform = isOpen ? "rotate(45deg)" : "rotate(0)";
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!widget.contains(event.target) && isOpen) {
                isOpen = false;
                menu.style.display = "none";
                mainButton.style.transform = "rotate(0)";
            }
        });
    }

    // Create global widget object
    window.FabWidget = {
        init: function(config = {}) {
            createWidget();
        },
        handleAction: function(action) {
            switch(action) {
                case 'chat':
                    alert('Opening chat...');
                    break;
                case 'email':
                    window.location.href = 'mailto:support@example.com';
                    break;
                case 'call':
                    window.location.href = 'tel:+1234567890';
                    break;
            }
            // Call customer callback if defined
            if (typeof window.onFabAction === 'function') {
                window.onFabAction(action);
            }
        }
    };
})();
