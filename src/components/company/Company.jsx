
const Company = ({companyInfo}) => {
    return <div>
        <div>
            <h1>{companyInfo.name}</h1>
            <p>Founder: <i>{companyInfo.founder}</i></p>
            <p>Employees: <i>{companyInfo.founder}</i></p>
            <div>
                {Object.keys(companyInfo.headquarters).map(key => {
                    return <div key={key}>
                        {key}: {companyInfo.headquarters[key]}
                    </div>
                })}
            </div>
        </div>

        <div>
            <h4>Links:</h4>
            {Object.keys(companyInfo.links).map(key => {
                return <div key={key}>
                    <a href={companyInfo.links[key]}>{companyInfo.links[key]}</a> 
                </div>
            })}
        </div>
    </div>
}

export default Company;