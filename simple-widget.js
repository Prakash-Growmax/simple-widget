<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAB Widget Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f0f2f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>FAB Widget Test</h1>
        <p>You should see a green circular button in the bottom right corner.</p>
        <div id="status">Widget status: Loading...</div>
    </div>

    <!-- Add your widget script -->
    <script>
        // Function to update status
        function updateStatus(message) {
            document.getElementById('status').textContent = 'Widget status: ' + message;
        }

        // Function to check if widget exists
        function checkWidget() {
            if (window.FabWidget) {
                updateStatus('Widget found');
                console.log('Widget object:', window.FabWidget);
                return true;
            }
            updateStatus('Widget not found');
            return false;
        }

        // Function to initialize widget
        function initializeWidget() {
            if (checkWidget()) {
                try {
                    window.FabWidget.init();
                    updateStatus('Widget initialized successfully');
                    console.log('Widget initialized');
                } catch (error) {
                    updateStatus('Error initializing widget: ' + error.message);
                    console.error('Error:', error);
                }
            }
        }

        // Load the widget script
        function loadWidget() {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/Prakash-Growmax/simple-widget@main/simple-widget.min.js';
            
            script.onload = function() {
                updateStatus('Script loaded');
                // Wait a brief moment to ensure script is processed
                setTimeout(initializeWidget, 100);
            };
            
            script.onerror = function() {
                updateStatus('Error loading widget script');
            };
            
            document.body.appendChild(script);
        }

        // Start loading when page is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadWidget);
        } else {
            loadWidget();
        }
    </script>
</body>
</html>
