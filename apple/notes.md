portfolio colors   
F8F8F7
D1D4DD
3D3D49
747F90
3A393C

props in links
handle in the outside like app or index
still using state to set
const [$%&$, Set$%&$] = useState(|pass in the import or use axios call?|) <-- this needs to be passed from main page by the render

Render Props render expects function
from <ROute path='' *component=''*> *<-- this is changed to render
<Route path='' render={(props) => <Nav {...props} items={$%$%} />}><-- short way to pass props


<Route path='' render={(...props) => <Nav items={$%$%} match={$%$%} history={$%$%} location={$%$%]\}/>}>  <--- long way to pass props



spread opperator {...props}

sub nav is comprised of seperate js files
<Route path='/use same nav for page but use js for the id /' render={(props) => <Other {...props} items={$%$%} />}>


hustory push
keeps track of session by rct rtr
pushes new entry to stack to redirect user to new route
on buttins? programatically navigate button form control the route
const rtshp = event => {
    event.preventDefault();,<-- stops react and rt from handling buttons
    props.history.push()<-- sets new page and uses the rt set by the app>
}