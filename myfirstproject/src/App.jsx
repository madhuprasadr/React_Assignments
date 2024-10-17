import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const pricingPlans = [
    {
        title: "FREE",
        price: "$0/month",
        features: [
            "Single User",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "✗ Unlimited Private Projects",
            "✗ Dedicated Phone Support",
            "✗ Free Subdomain",
            "✗ Monthly Status Reports",
        ],
        buttonLabel: "Get Free"
    },
    {
        title: "PLUS",
        price: "$9/month",
        features: [
            "5 Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "✓ Unlimited Private Projects",
            "✓ Dedicated Phone Support",
            "✓ Free Subdomain",
            "✗ Monthly Status Reports",
        ],
        buttonLabel: "Get Plus"
    },
    {
        title: "PRO",
        price: "$49/month",
        features: [
            "Unlimited Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "✓ Unlimited Private Projects",
            "✓ Dedicated Phone Support",
            "✓ Free Subdomain",
            "✓ Monthly Status Reports",
        ],
        buttonLabel: "Get Bro"
    },
];

function PricingCard({ title, price, features, buttonLabel }) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <h4>{price}</h4>
                <ul className="list-unstyled">
                    {features.map((feature, index) => (
                        <li key={index} className={feature.startsWith("✓") ? "text-success" : "text-danger"}>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className="btn btn-primary">{buttonLabel}</button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container mt-5">
            <div className="row">
                {pricingPlans.map((plan, index) => (
                    <div className="col-md-4" key={index}>
                        <PricingCard {...plan} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;