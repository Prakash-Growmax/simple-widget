// feedback-widget.js
(function() {
    // Create the widget HTML
    function createWidget() {
        const widget = document.createElement('div');
        widget.innerHTML = `
            <div id="simple-feedback" 
                 style="position: fixed; 
                        bottom: 20px; 
                        right: 20px; 
                        background: #fff;
                        box-shadow: 0 2px 12px rgba(0,0,0,0.1);
                        border-radius: 8px;
                        font-family: Arial, sans-serif;
                        z-index: 9999;">
                <div style="padding: 16px;">
                    <div style="font-size: 14px; margin-bottom: 8px;">
                        How was your experience?
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button onclick="window.SimpleFeedback.send('positive')"
                                style="padding: 8px 16px;
                                       background: #4CAF50;
                                       color: white;
                                       border: none;
                                       border-radius: 4px;
                                       cursor: pointer;">
                            👍 Good
                        </button>
                        <button onclick="window.SimpleFeedback.send('negative')"
                                style="padding: 8px 16px;
                                       background: #f44336;
                                       color: white;
                                       border: none;
                                       border-radius: 4px;
                                       cursor: pointer;">
                            👎 Bad
                        </button>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(widget);
    }

    // Initialize the widget
    window.SimpleFeedback = {
        init: function(config = {}) {
            createWidget();
        },
        send: function(type) {
            const feedback = document.getElementById('simple-feedback');
            feedback.innerHTML = `
                <div style="padding: 16px;">
                    <div style="font-size: 14px;">
                        Thanks for your feedback! 🎉
                    </div>
                </div>`;
            
            // You can add your own callback here
            if (typeof window.onFeedbackSend === 'function') {
                window.onFeedbackSend(type);
            }

            // Hide after 2 seconds
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 2000);
        }
    };
})();
