export default function Page() {
    return (<>
        <p>Welcome to the Dashboard page</p>
        <p>
            Want to go back? 
            <button style={{padding:"10px", background:"#6faede"}} className="rounded-lg">
                <a href="/">Home</a>
            </button>
        </p>
        <p>
            Want to visit Customers Page? 
            <button style={{padding:"10px", background:"#6faede"}} className="rounded-lg">
                <a href="customers">Customers</a>
            </button>
        </p>
        <p>
            Want to visit Invoices Page? 
            <button style={{padding:"10px", background:"#6faede"}} className="rounded-lg">
                <a href="invoices">Invoices</a>
            </button>
        </p>
    </>
    );
}