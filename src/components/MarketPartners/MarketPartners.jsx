import LogoPartner from '../LogoPartner'
import './MarketPartners.css'

const MarketPartners = () => {
  return (
    <div className="market-partners-section">
      <div className="market-partners-wrapper container">
        <h2>Our Market Partners</h2>
        <div className="market-partners-logo">

          <LogoPartner partnerLogo={"sap_logo.png"}/>
          <LogoPartner partnerLogo={"oracle_logo.png"}/>
          <LogoPartner partnerLogo={"microsoft_certified_logo.png"}/>
          <LogoPartner partnerLogo={"vmware_logo.png"}/>
          <LogoPartner partnerLogo={"storage_craft_logo.png"}/>
          <LogoPartner partnerLogo={"smart_elock_logo.png"}/>
          <LogoPartner partnerLogo={"trend_micro_logo.png"}/>
          <LogoPartner partnerLogo={"accor_logo.png"}/>
          <LogoPartner partnerLogo={"cisco_logo.png"}/>
          <LogoPartner partnerLogo={"citrix_logo.png"}/>
        </div>
      </div>
    </div>
  )
}

export default MarketPartners