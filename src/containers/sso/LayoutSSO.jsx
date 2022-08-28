import SSOFooter from "../components/SSOFooter";
import ScriptFooter from "../components/ScriptFooter";
import SSOMeta from "../components/SSOMeta";

const LayoutSSO = ({ children }) => {
	return (
		<>
			<SSOMeta />
			<div className="mn-ht-100v d-flex flex-column sso-body">
				<div className="content pd-0 position-relative">
					<div className="content-body mg-t-30">
						<div className="container pd-x-0" id="content">
							{children}
						</div>
					</div>
				</div>

				<SSOFooter />
				<ScriptFooter />
			</div>
		</>
	);
};

export default LayoutSSO;
