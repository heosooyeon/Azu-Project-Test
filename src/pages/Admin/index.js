import React from "react";
import { useState } from "react";
import moment from "moment";
import Clock from "react-live-clock";
import "./style.css";
import * as xlsx from "xlsx";

function Admin() {
  const ExcelDownload = () => {
    //엑셀 다운로드
    const arr = [
      { num: 10, name: "홍길동", phone: "010-1234-5678", member: 3 },
    ];
    const ws = xlsx.utils.json_to_sheet(arr);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "sheet1");
    xlsx.writeFile(wb, "Test.xlsx");
    [
      "No",
      "고객명",
      "생성일",
      "핸드폰 번호",
      "유형",
      "연령",
      "성별",
      "위자드담당",
      "영업담당",
      "상태",
      "최종변경일",
      "개인정보수집동의일",
      "개인정보수집종료일",
      "마케팅동의",
      "마케팅동의일",
      "마케팅종료일",
    ].forEach((x, idx) => {
      const cellAdd = xlsx.utils.encode_cell({ c: idx, r: 0 });
      ws[cellAdd].v = x;
    });
  };

  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));

  const onChangeDate = (date) => {
    const newDate = moment(date.timeStamp).format("YYYY-MM-DD");
    setValue(newDate);
    console.log(newDate);
  };

  return (
    <div className="index">
      <div className="box">
        <img
          className="logo"
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAXCAYAAACxt3KvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM2MTFkMjlhLWY4ODAtNTE0My1iMzExLTk4YjFlYjc3YzgzZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkZCOTI1RDZGNzgxMUVEQjBFMThBNUVDN0VEQUM3OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkZCOTI1QzZGNzgxMUVEQjBFMThBNUVDN0VEQUM3OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNjExZDI5YS1mODgwLTUxNDMtYjMxMS05OGIxZWI3N2M4M2QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzYxMWQyOWEtZjg4MC01MTQzLWIzMTEtOThiMWViNzdjODNkIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+txRwNQAACEpJREFUeNrsXQlsVUUUvcW2IiCVxVohggoKiqBio7igUEwERRQXXEBUNLJoFBWNC6u4UFe0oCDiThRZJJE9gMUAkhgQA26IWolsghQERGh/8R7+/cnn85Y7r7/989qe5ITw3n3z/sybuXPvnTvTtOzsnDuI6Hjmf5Q8nMBcwPw+4XpH5oXM4gDlrWEuIfuQxrxE6nYmsymzvvAQc6+07WZpj2+Zy5j/UDhwBrO7/N5D5SyrFvM45gxpD1vRlXkWc3cSy2zIXCzfPx5tmFcxdxmWV5u5h/kps8Sy9sN3zpWx3prZnNmYWYeZydwnRB/4nbmO+RXzT7+C05njRWElGxkOCutuYRDMtkxhXcocxLyGmWX4bBlzBfMF5lzLFVZn5qtJLvMHyxXWEGaXCih3lIPCwmQwJmB5UFizLFJYUEz9mf2YJwV4HhP5O8wpzFI3TVhRiFheXlCcyFwqjXt7AGUVa/fLmHOYPzOvsHjwllENKETjJBWA9TSNWcR8MqCyIhkT74s1/4DbwInENVwkQANCu++Qjh2J6+AlHp0/9p6/Xd53yOH32DCLDGT+xbzcR+4A8zvm1wpLAm5kocwqGRYPqPhvUmb4fCRkA9NpTJi4w6UyJiJx48JN+ZfEtW+ZPFeibEsb2rQHczvzJsWYWCdj4hefPoSwQYF4H5lHxF+ys3Oa8L/HxDXsVuZ05o0GP/o+5iRmMykjQxp+b4JcA7FI8K6NzPuZ41wUwwSJB8VcV5i/O1P4YRYp3YSZzD7M/QkfdarEHbywUXz+/RYN3jpiVcZM9E3iBs9WPt9JLFJ8yzSZJLdJB7bZYqibUOfBzNcMykC44C1xk0plTOyko2OX9eR9sTFxj7hFifiYiXhzjozXmLGxhcofWyyPiztcIbdWvIjihH4xV5STn4WPWNiqmMJyEjrbIf7khRUS0zHFNxQNzsVjJfNiyzrwR6KE/ABz1i1Gl0fRoKsf5opCsBm58u00aMVcX0XcNwya9krZ1cwLArxjOUUXcRI9Dix+/GpRW7gp1kT8xmxH0SB7ItqIMkvzKaNYZLe4xbAQFB1r8OPRwJ0NK/yIg7ICJlvWSbsplRVWOAZ43MeCwTxFOVczH7R84NaqIFnbMdJAFortMcPy+zsoK+Bly5RVE3HZtIptn8s9GEWPK8qAZzbRrzMNJ7OVnGEGsjDrRjhcLxLT1ybcqZQbo3Bz8g0GRgOqgW34gvm5gTz6+CkG8n0drsEdfcaydhitcOUArGAW+si8IXX0w7XwPLwU1h6xgrSAhTVQKYsZo77D9Ycpuflg5QUC4rco5BBzmqqQW6p0tRtIvKIG9mG8gSziYNq4Vz8X6+pROjoWnEo0l9+qgcb4OEjRuK8GA/zM9akyyLSAVVbHRwaxrt4uLtMsyzqnNi4Hd3CHUnatUu7KGt1gJRCHXGQgj8WrPB+ZdBcPZYNyIqxMdFDKYUFgpVJ2tVKupSa+YGKO5ih80qEeZqZtaKWUM8lSXp/kd9eg8jHKUN4vXAJP5lSH61MsrHtbpdxm0oeUipRyjTQKa4nCD03029u53EOiZVeH6xMM31FZaKKUM0lD0C5Bwy08tkY3WAkkDZssSnXysLJauEzWCB2MtLDu9ZVyWw36+h6lXG3tCs6zhpXK9/DTnayTpy3tmPtS+O5SqhpZ0CZAzOdFiq4IwRW63uLfCk9hm4H8Uy7XsViT6XD9CUvrfVApl2743VXQKiz47SarI7CiEnOJupBz4uVLlNqEUC9sUsrVMyizmcG7S6uZwkLbIBUAici9yDxVprInM5OJHH3/hoRr2DHhlCG+kPSJuZWNLUq5k0m/cyNHKbfLJEdmhGHF+ij8eCiqAos7pTYYaJKC0Fopt5aqH1om/N/2fYzjDL9ToovnliU+2uI6rzJQQtqUjnZKue0mCgsfxiQAfytFj1wBsE3BaYPvZAP/NRWYT7qA4GmkC5IjW1mbxT+jGiqsjiH8zQ8ZyLaNU1LdXTwOKMFlFte3kPmTUjZPKddV+27TLGTMEBsM5IeI2+nkv28jO4OKiTP8BwEtSif0VZaFDaJzqpmyyiXzzHAb8KV8Ly0Qm0LSZQ+HezgMYGgI6qz1iu5SyHQi3RYmjMUCU4WFqL/Jkm6euFVNHe7hLKh/Q/BxPlHKDfbxxbPE0tRgmOVtkuzNtjgsb2GIla3JpmgoK+Qn9XS4h6TU3SGo75ukC5cgj7GXj4xWQWNxoijIPi9kry5XyiIYfa7D9R+Zr4ekM+K8qoHKun7mcR/udENFOQjkLqaqA684VCOK7nrA3tUwb0WaJpaWFojZNHa4Pj1EdYa3oFkU+pB5jsu9fNKdgILTSA9nEqQH/LGvULDTGWIYFLIOiTyxInHTvJQ8YjC7xI3EdoODYvLeyzxd2a62WVfYw/U2RbP5oXwOKBVv/CCE1ZAZZ52licWJNsmgqoFBonjTAj4PzyVMCy3IE0NQvZC847fIJVwjfWim9AVY1NiGd57iPe9SdAP1YbgdL6ONs3QI8BzOoL4tpJ0Sri02wJ5fAVZIb2kb24AUg4kpevdY6dhhwfMUPXHTFEhhaUF2nxHmFeqYH1AX+AH7KI84nrs8R3+MDPjcaAov0LHay2yajE3aEXGNsyxVVqlG2I6mgYuzI8Bzz4VUWZFYTFj5vo7MFuS8ME+ssKP+lkB5LCwAS7DdyD/BEm4Acmwmkf0rgyaDCR/pZoouV+Mc67rknp1eS5TcTnGvFoiZXGx5PXE+13j5xpWZFwWLA4HWgpD1C7gvyFn8g7wXJ3APgw/x3J6UulNDk41cmdAvkok4K66+TmMiImEU7DvE4ZXvkcdfz/lfgAEAk5O/q2CGgJIAAAAASUVORK5CYII="
          }
          alt="logo"
        ></img>
        <h1 className="title">고객 대기관리 시스템</h1>
        <h3 className="company">아주오토리움 고양전시장</h3>
      </div>
      <div className="des">
        <div className="today">
          TODAY(
          <Clock format={"YY.MM.DD"} ticking={true}></Clock>)
        </div>
        <div className="state">
          <li className="stay">대기중 : &emsp; |&emsp;</li>
          <li className="see">관람중 : &emsp; |&emsp;</li>
          <li className="consult">상담중 : &emsp; |&emsp;</li>
          <li className="end">종료 : &emsp; |&emsp;</li>
          <li className="cancle">방문포기 : &emsp; |&emsp;</li>
        </div>
      </div>
      <div className="search">
        <label>from</label>
        <input
          type="date"
          value={value}
          onChange={onChangeDate}
          className="fromdate"
        />

        <label>to</label>
        <input
          type="date"
          value={value}
          onChange={onChangeDate}
          className="todate"
        />

        <input
          type="text"
          className="text"
          placeholder="고객명, 연락처로 조회"
        ></input>
        <input type="button" className="btn" value="검색"></input>
        <select className="manager">
          <option value="none" hidden>
            담당 위자드
          </option>
          <option value="All">전체</option>
          <option value="Choi">최선영</option>
          <option value="Im">임요한</option>
        </select>
        <select className="customer">
          <option value="none" hidden>
            담당 위자드
          </option>
          <option value="All">전체</option>
          <option value="Stay" selected>
            대기중
          </option>
          <option value="See">관람중</option>
          <option value="Con">상담중</option>
          <option value="End">종료</option>
          <option value="Adan">방문포기</option>
        </select>
        <button className="F5" onClick="get data()">
          <img
            className="reload"
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAYAAAC7UXvqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmIwZjhiZTkwLCAyMDIxLzEyLzE1LTIxOjI1OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuMiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzIzMkM5MjE2Rjk4MTFFREJFNEU5ODE0MjRCMTVBNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzIzMkM5MjI2Rjk4MTFFREJFNEU5ODE0MjRCMTVBNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MjMyQzkxRjZGOTgxMUVEQkU0RTk4MTQyNEIxNUE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MjMyQzkyMDZGOTgxMUVEQkU0RTk4MTQyNEIxNUE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiBL7qYAAARXSURBVHja1JprSFRREICP65YmZVoZlUQPKrOIyOxhae+HhSURFRRGhGVRPyMp/ClERBY9oaz0R/aAotJIemglFQZRJBWVgUVSaZnaFmL2mGFn7XCbu3t377nr3oEP3T1n750595w5M3NPWMXrPyJIMgKoVX1Rhwie7AGW2dmAbsBZYJFdDYgGugMXgHl2NCCM/vYALgMz7GaALFFAKTDVbmtAO6XKgYl2MSCK+a43GTEu0Is6FSo4EkgDEsnnx0lK/wCG6fyuH3ALmAm8CLYBScAaYAUw2MR10NibZERtMAxIB3bSiKuSQUAFeac6q9bAaOAakWbBOsGneNSKRYw+fCvwmEbfKsE1sF71FIoEioGVBvq+Ae6TIjgNvgMdQAxwCIj18tsnwAKgUaUB6OauAtO99GkAjgFngOde+h3x0vaIlG9S6YXQBZZ5Ub4ZyAcOA20mpg0+scVAi8p9AOd8CZCq046xzEYafTNyB8gAXKp34lwgk/kes588iuv9VT5C8/kGjbzLzAg4dTanfB3lcdQLA7xXpPR/GW1+bWbdloP5jH44nOm7w4TyslwElqtQnjNgNTCZ6Xce2K3gfuipVgHtViQ0DgoPtPIRyFGQjRUBWbQvKBN5DSykSFIr28llmhEX7bDKSyCyAWuZ9pfAaQX3+W1V7OGQPMRSpn2/lTdXacA0JmP6SWUQYQcDuArBAwVzP2gGjGHabgsbiENKVLTyzE4GxDFtdXYyIIZp+2oHA5xeotJfIaRnLEXIHu/oor8FTmmn7KP5Ua8QMmCIZICcCRZ4Rp5L5eJDyIB4vSnuMeA90yEhhAxI1CkgdBpQw3RICSEDUnRKMJ0G3GM6zBH/V5S7QlCHWcz31bIBd5lQty8wNwQMSGccDAaYFbIBH6i8oZVNIWBAjk6c9kXr/88xHTHEHt+Fyk+gyoVWirmUsoiJPrE+tE/8e78VTMF7HmDu3SwPtmzAN+EuEWplNrClCwzYLPjC2kGgtdNKzZt6jIleMcFdG3mC6iApP0W4q3baYlgjRc5NemUVfDx5zAUx5SwN0uaWQPeKYNpytVEDF8QdF+7KmVbiyN0mWah8MiVSXHh/ndap8GUAzqlsnfCiP1AFrLNAebxmJTCAaUNdsriyjF5x95PQL3lj8n8KuAIMV6A4vtG8RNfsybS3kC4N3hIaTjA+ypBXvEaWUDxykvy1v4L7SyGlrpk6fVpJhxpdX2vgvFAyjfZAH/1QkXKaYp5XTO1SPDOUigfoGvHEylgf16unkX/qdbMweOAJ52UJ7Qn+SIcm8zMqlTTn643mxL4EC7zzgW3CvxcSTj+Vx2tjLXaeEeX9McCTI++ljaRQKCyRU357Ahgl3Ce7DJczAznsgSOzgTxQvsnyy1tgl3Cfo8imqNi/gEnBoT8MtibR+kil9A8XbDjzBN8J96vYKtqwHgqTJfcwi04t4tGyaMITKLYonnYBeQejgop+JiyVvwIMAH7v296WCPz5AAAAAElFTkSuQmCC"
            }
            alt="replay"
          ></img>
        </button>
      </div>
      <hr className="hrcss"></hr>
      <div className="tdiv">
        <table className="table" border="1">
          <thead>
            <tr>
              <td className="staynum">
                대기번호<br></br>↑
              </td>
              <td>고객명</td>
              <td>연락처</td>
              <td>인원</td>
              <td>방문유형</td>
              <td>연령</td>
              <td>성별</td>
              <td>1차 알림톡</td>
              <td>2차 알림톡</td>
              <td>담당 위자드</td>
              <td>담당 영업사원</td>
              <td>상태</td>
            </tr>
          </thead>
          <tr>
            <td>adf</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className="bottom">
        <select className="num">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
        <button onClick={ExcelDownload} className="excel">
          엑셀 DOWNLOAD
        </button>
      </div>
    </div>
  );
}

export default Admin;
