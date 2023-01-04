import React from "react";
import Dropdown from "react-dropdown";
import ProgressBar from "@ramonak/react-progress-bar";

const ContentSecondInterest = () => {
  const options = ["Online Shopping", "two", "three"];
  const defaultOption = options[0];

  return (
    <>
      <div className="audience">
      <h5 className="h6first">Audience Interest Segments of Articles</h5>

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
              <td style={{ width: "200px", paddingLeft: "0" }}>
                <ProgressBar
                  completed="70"
                  baseBgColor="#fff"
                  bgColor="#666"
                  height="30px"
                  className="progress-bar"
                  borderRadius={0}
                />
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
              <td style={{ width: "200px", paddingLeft: "0" }}>
                <ProgressBar
                  completed="70"
                  baseBgColor="#fff"
                  bgColor="#666"
                  height="30px"
                  className="progress-bar"
                  borderRadius={0}
                />
              </td>
            </tr><tr>
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
              <td style={{ width: "200px", paddingLeft: "0" }}>
                <ProgressBar
                  completed="70"
                  baseBgColor="#fff"
                  bgColor="#666"
                  height="30px"
                  className="progress-bar"
                  borderRadius={0}
                />
              </td>
            </tr><tr>
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
              <td style={{ width: "200px", paddingLeft: "0" }}>
                <ProgressBar
                  completed="70"
                  baseBgColor="#fff"
                  bgColor="#666"
                  height="30px"
                  className="progress-bar"
                  borderRadius={0}
                />
              </td>
            </tr><tr>
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
              <td style={{ width: "200px", paddingLeft: "0" }}>
                <ProgressBar
                  completed="70"
                  baseBgColor="#fff"
                  bgColor="#666"
                  height="30px"
                  className="progress-bar"
                  borderRadius={0}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContentSecondInterest;
