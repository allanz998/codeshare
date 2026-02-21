const kpis = [
  { label: 'Current Balance', value: '$52,024.00', change: '↗ +55.46%', positive: true },
  { label: 'Fiat via Flutterwave', value: '$32,024.00', change: '↗ +22.14%', positive: true },
  { label: 'Tagname Transfers', value: '12,124.00 USDT', change: '↗ +12.80%', positive: true },
  { label: 'Cashout Expenses', value: '$5,014.00', change: '↘ -4.12%', positive: false },
];

const rows = [
  ['Fiat Deposit', '#FLW-23915554', 'Flutterwave', '$790'],
  ['Tag Transfer', '#TAG-51825554', '@jon → @alex', '1524 USDT'],
  ['External Deposit', '#USDT-99225554', 'TRC20', '$1420'],
  ['Fiat Cashout', '#CSH-41925554', 'Bank Account', '$1250'],
];

const goals = [
  ['Liquidity Reserve', '55%', '$10,520 / $20,000', '55%'],
  ['New Market Launch', '85%', '$42,500 / $50,000', '85%'],
  ['Compliance Buffer', '75%', '$15,250 / $20,000', '75%'],
];

function App() {
  return (
    <div className="page-bg">
      <main className="app-shell">
        <header className="top-bar">
          <div className="brand-wrap">
            <div className="brand-icon">₿</div>
            <div>
              <p className="brand-title">BridgePay</p>
              <p className="muted tiny">USDT Treasury Network</p>
            </div>
          </div>

          <nav className="pill-nav">
            <button className="pill active">Dashboard</button>
            <button className="pill">Wallets</button>
            <button className="pill">Cards</button>
            <button className="pill">Activity</button>
          </nav>

          <div className="actions-right">
            <button className="icon-btn">◐</button>
            <button className="icon-btn">⚙</button>
            <button className="icon-btn">🔔</button>
            <div className="avatar" />
          </div>
        </header>

        <section className="hero-row">
          <div>
            <h1>Good morning, Alex N. 👋</h1>
            <p className="muted">Track fiat deposits, USDT settlement, and payout operations in one place.</p>
          </div>
          <div className="hero-actions">
            <div className="search-wrap">
              <span>🔍</span>
              <input placeholder="Search anything..." />
            </div>
            <button className="secondary-btn">Withdraw</button>
            <button className="primary-btn">Deposit</button>
          </div>
        </section>

        <section className="content-grid">
          <div className="left-col">
            <div className="top-cards">
              <article className="card">
                <p className="muted">Total Revenue</p>
                <p className="big-money">$25,562.05</p>
                <div className="row-end">
                  <span className="muted tiny">Vs last month</span>
                  <span className="positive">+15.46%</span>
                </div>
              </article>

              <article className="card span-2">
                <div className="card-head">
                  <h2>All track in one</h2>
                  <button className="mini-btn">View all</button>
                </div>
                <div className="kpi-grid">
                  {kpis.map((item) => (
                    <div className="inner-card" key={item.label}>
                      <p className="muted tiny">{item.label}</p>
                      <p className="money">{item.value}</p>
                      <p className={item.positive ? 'positive tiny' : 'negative tiny'}>{item.change}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="card">
              <div className="card-head">
                <h2>Recent Settlement Activity</h2>
                <div className="table-controls">
                  <button className="mini-btn">Searching</button>
                  <button className="mini-btn">Filter</button>
                </div>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Transaction ID</th>
                      <th>Channel</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row[1]}>
                        <td>{row[0]}</td>
                        <td className="muted">{row[1]}</td>
                        <td>{row[2]}</td>
                        <td className="strong">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <aside className="right-col">
            <article className="card">
              <h2>Quick Transfer</h2>
              <div className="quick-grid">
                <button className="quick-item">Sara</button>
                <button className="quick-item">Ishan</button>
                <button className="quick-item">Jon</button>
                <button className="quick-item">Alex</button>
                <button className="quick-item">+</button>
              </div>
            </article>

            <article className="card brand-card">
              <div className="card-head small-text">
                <p>Your Cards</p>
                <button className="ghost-pill">View all</button>
              </div>
              <div className="credit-card">
                <p className="small-text">BridgePay Treasury Card</p>
                <p className="card-number">•••• •••• •••• 3241</p>
                <div className="small-text card-foot">
                  <span>Alex N.</span>
                  <span>USDT</span>
                </div>
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <h2>Goals & Savings</h2>
                <button className="mini-btn">View all</button>
              </div>
              <div className="goal-list">
                {goals.map(([title, pct, amount, width]) => (
                  <div key={title}>
                    <div className="goal-head">
                      <span>{title}</span>
                      <span>{pct}</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width }} />
                    </div>
                    <p className="muted tiny">{amount}</p>
                  </div>
                ))}
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
