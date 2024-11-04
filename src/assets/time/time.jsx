import './time.css'
//NOT WORKING FOR SOME FUCKING REASON!!!!
export function Time() {

  return(
    <>
    <div>
    <div class="times">
      <div class="card-header">
        <div class="media-body">
          <h4 class="OpeningT">Opening Hours</h4>
        </div>
        <i class="far fa-clock fa-3x" style="opacity: 0.2"></i>
      </div>
      <table class="openinghours">
        <tbody>
          <tr id="Monday">
            <th>Monday</th>
            <td class="text-right">8 AM–5 PM</td>
          </tr>
          <tr id="Tuesday">
            <th>Tuesday</th>
            <td class="text-right">8 AM–5 PM</td>
          </tr>
          <tr id="Wednesday">
            <th>Wednesday</th>
            <td class="text-right">8 AM–5 PM</td>
          </tr>
          <tr id="Thursday">
            <th>Thursday</th>
            <td class="text-right">8 AM–5 PM</td>
          </tr>
          <tr id="Friday">
            <th>Friday</th>
            <td class="text-right">8 AM–5 PM</td>
          </tr>
          <tr id="Saturday">
            <th>Saturday</th>
            <td class="text-right">Closed</td>
          </tr>
          <tr id="Sunday">
            <th>Sunday</th>
            <td class="text-right">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </>
  );
}