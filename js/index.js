/*
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const blob = document.getElementById("blob");
const cursor = document.getElementById("cursor-circle");


function blobFollow(event) {
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

function cursorFollow(event) {
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 0, fill: "forwards" });
}
document.addEventListener("mousemove", event => {
    blobFollow(event);
    cursorFollow(event);
});//