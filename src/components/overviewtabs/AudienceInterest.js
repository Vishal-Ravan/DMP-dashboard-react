import React from "react";
import Dropdown from "react-dropdown";

const AudienceInterest = () => {
  const options = ["Online Shopping", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <div className="audience-interest">
        <div className="audience-interest-wrpper">
          <table>
            <tr>
              <th></th>
              <th className="p1">Interests Segment</th>
              <th className="p1">Avg Time</th>
              <th className="p1">Visitors</th>
              <th className="p1">3rd Party Universe</th>
              <th className="p1">Page Views</th>
              <th></th>
            </tr>
            <tr>
              <td>1</td>
              <td className="table-dd">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </td>
              <td className="num4">269</td>
              <td className="num4">34,578</td>
              <td className="num4">34,578</td>
              <td className="num5">34,578</td>
              <td>
                <input type="range" id="vol" name="vol" min="0" max="50" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="table-dd">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </td>
              <td className="num4">269</td>
              <td className="num4">34,578</td>
              <td className="num4">34,578</td>
              <td className="num5">34,578</td>
              <td>
                <input type="range" id="vol" name="vol" min="0" max="50" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="table-dd">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </td>
              <td className="num4">269</td>
              <td className="num4">34,578</td>
              <td className="num4">34,578</td>
              <td className="num5">34,578</td>
              <td>
                <input type="range" id="vol" name="vol" min="0" max="50" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td className="table-dd">
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </td>
              <td className="num4">269</td>
              <td className="num4">34,578</td>
              <td className="num4">34,578</td>
              <td className="num5">34,578</td>
              <td>
                <input type="range" id="vol" name="vol" min="0" max="50" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default AudienceInterest;
