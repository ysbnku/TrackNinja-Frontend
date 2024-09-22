import React, { useEffect, useState } from 'react';
import LeftMenu from '../components/leftMenu';
import AdminMenu from '../components/adminMenu';

const License: React.FC = () => {
	return (
		<>
			<AdminMenu />
			<div className="grid h-screen">
				<LeftMenu />
				<div className="col">

					<div className="col"></div>
					<div className="container p-fluid">
						<h1 className="text-center">Track Ninja License Agreement</h1>
						<p className="mb-4">Please read this license agreement carefully before using the software. By downloading, installing, or using Track Ninja, you agree to be bound by the terms of this agreement.</p>

						<h2 className="mb-3">1. License Scope</h2>
						<p className="mb-4">Track Ninja ("Software") is licensed, not sold, to you for use strictly under the terms of this agreement. All rights, title, and intellectual property rights in and to the Software are owned by Track Ninja Software.</p>

						<h2 className="mb-3">2. Terms of Use</h2>
						<p className="mb-3">Track Ninja is designed to monitor user activities on Mac computers and report them to the designated admin. By using the Software, you agree to use it for legal purposes only. The following actions are strictly prohibited:</p>
						<ul className="list-none mb-4 pl-0">
							<li className="mb-2">Monitoring and collecting data from users without their consent.</li>
							<li className="mb-2">Selling, leasing, or transferring the Software to third parties.</li>
							<li>Reverse engineering, decompiling, or modifying the Software's source code.</li>
						</ul>

						<h2 className="mb-3">3. Data Privacy</h2>
						<p className="mb-4">Track Ninja monitors user activities and reports the information to the designated admin only. Collected data will be shared exclusively with authorized personnel and will not be disclosed to third parties. The use of the Software must comply with applicable data privacy regulations.</p>

						<h2 className="mb-3">4. Disclaimer of Liability</h2>
						<p className="mb-4">Track Ninja Software is not responsible for any data loss, damages, or indirect loss that may occur from using the Software. The user assumes all responsibility for any consequences arising from the use of Track Ninja.</p>

						<h2 className="mb-3">5. Termination of Agreement</h2>
						<p className="mb-4">This agreement is effective upon your use of the Software. If you violate any terms, this license will be immediately terminated, and you will lose the right to use the Software.</p>

						<h2 className="mb-3">6. Updates and Changes</h2>
						<p className="mb-4">Track Ninja Software reserves the right to update or change this license agreement at any time. Updates and changes will be communicated via email or through the software interface.</p>

						<h2 className="mb-3">7. Contact Information</h2>
						<p>If you have any questions about this agreement or need support, please contact Track Ninja Software at yavuzbitmez.nku@gmail.com or +90 507 860 25 53.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default License;
