import Reac from "react"

const UserSignin=()=>{
    return(<>
       <main>
        <div className="form--centered">
            <h2>Sign In</h2>
            <form action="">
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value=""/>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" value=""/>
                <button class="button" type="submit">Sign In</button>
                <button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>

        </div>


       </main>
    </>
    )}

export default UserSignin;
