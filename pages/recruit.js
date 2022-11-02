import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const recruit = () => {
  return (
    <div>
      <MainLayout>
        <div
          className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/img/mv-sm.jpg")',
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: 450,
          }}
        >
          <div className="flex justify-center items-center h-full">
            <div>
              <h2 className="font-bold text-4xl font-sans text-white uppercase">
                リクルート
              </h2>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center pt-4 font-sans ">
          <h2 className="mx-auto text-center p-2 font-bold text-md">
            株式会社エグゼの最新採用情報です。
          </h2>
          <p className="mx-auto text-center font-light text-md font-sans">
            エグゼはミャンマー、モンゴル、ベトナム、イスラエルで数多くのプロジェクトを運営しており、新卒採用、中途採用も随時行っております。
          </p>
        </div>
        <div className="flex flex-col mx-auto max-w-6xl bg-slate-50 my-8 p-8">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden"></div>

              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  height: "509.6px",
                }}
                width="100%"
              >
                <colgroup>
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "49.9341%" }} />
                </colgroup>
                <tbody>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      募集職種
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      レギュラーポジション
                    </td>
                  </tr>
                  <tr style={{ height: "58.8px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "58.8px", textAlign: "left" }}
                    >
                      募集職種の詳細
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "58.8px" }}
                    >
                      プロジェクト管理タスク
                      <br />
                      ミャンマー国内に保有するオフィスビル、サービスアパートメント、ホテル、レストランに関する業務全般をお任せします。
                      <br />
                      ※営業、技術、経理、人事・総務関係など 〈さくらタワー〉
                      <br />
                      ミャンマー（ヤンゴン）のランドマークタワー
                      多くの日系企業のオフィスが入居し、最上階のルーフトップバー「ヤンゴン
                      ヤンゴン」はミャンマーのエンターテイメントの原点。
                      <br />
                      〈さくら邸〉
                      <br />
                      ミャンマー（ヤンゴン）最大規模を誇る長期入居者向けの集合住宅
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      雇用制度
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      正社員
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      エントリー・募集方法
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      東京（またはヤンゴン）の本社で書類審査と面接・インターンシップ研修を1週間行い、最終判断を下す
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      スクリーニング方法と焦点
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      アジアに興味のある方。アジアが好きな人。勇敢で親しみやすい人。ミャンマー語に興味のある方大歓迎です。
                    </td>
                  </tr>
                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      提出書類等の審査
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      履歴書、履歴書、TOEIC検定のコピー
                    </td>
                  </tr>
                  <tr style={{ height: "39.2px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                      style={{ height: "39.2px", textAlign: "left" }}
                    >
                      採用連絡先
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                      style={{ height: "39.2px" }}
                    >
                      株式会社エグゼ
                      <br />
                      採用担当：中塚翔太
                      <br />
                      メール：shota.nakatsuka@careerart.co.jp
                    </td>
                  </tr>
                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      初任給
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      月給：22万円以上 ※経験に応じて応相談
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8">
                      昇給・賞与・福利厚生
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8">
                      交通費（上限1万円）、時間外手当、出張手当、賞与
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      勤務地
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      ミャンマー（ヤンゴン）
                      ※将来的に日本での勤務の可能性もあります。
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8 text-left">
                      勤務時間
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8">
                      オフィスは午前9時から午後6時まで、ホテルと住居は午前5時30分から午後11時まで。
                      （シフト制）
                    </td>
                  </tr>

                  <tr>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ textAlign: "left" }}
                    >
                      従業員給付
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                      勤続年数に応じた賞与制度、社宅、送迎あり
                    </td>
                  </tr>
                  <tr>
                    <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8 text-left">
                      休日
                    </th>
                    <td className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8 ">
                      週休2日制（土・日）、祝日、年末年始、夏季休暇
                      ※イベント期間中は変動あり
                    </td>
                  </tr>

                  <tr style={{ height: "19.6px" }}>
                    <th
                      className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px", textAlign: "left" }}
                    >
                      教育と訓練
                    </th>
                    <td
                      className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                      style={{ height: "19.6px" }}
                    >
                      必要に応じて利用できるサポート体制
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />
              <p className="m-4 ">
                ※ 返却不可の書類。 <br /> ※
                ご不明な点がございましたら、お問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default recruit;
