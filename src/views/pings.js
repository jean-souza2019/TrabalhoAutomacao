import React from "react";



var ping = require('ping');
var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

for (let host of hosts) {
    let res = await ping.promise.probe(host);
    console.log(res);
}

class pings extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                </div>
            </>
        );
    }
}

export default pings;
