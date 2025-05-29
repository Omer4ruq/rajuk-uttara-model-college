import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
            <div className="space-y-6 text-justify">
                <p>
                    We are committed to safeguarding the privacy of our users. This Privacy Policy outlines how your personal information is collected, used, and protected.
                </p>
                <p>
                    We may collect information such as your name, email address, and usage data when you interact with our services.
                </p>
                <p>
                    The information we collect is used to improve our services, respond to inquiries, and send periodic updates, if you have opted in.
                </p>
                <p>
                    We do not sell, trade, or rent your personal identification information to others. However, we may share generic aggregated demographic information with our partners.
                </p>
                <p>
                    You may opt out of receiving future communications from us by following the unsubscribe instructions included in the emails.
                </p>
                <p>
                    We may update this policy periodically. Any changes will be posted on this page with an updated revision date.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
