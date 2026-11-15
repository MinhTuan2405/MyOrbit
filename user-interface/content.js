/*
 * ✨ YOUR EDITING STARTS HERE ✨
 * Change the labels, bio, links, posts and projects to make this yours.
 * Images live in assets/img/. Entries with demo: true are just examples.
 * No build tool and no internet connection required.
 */
window.WAREHOUSE = {
  settings: {
    name: 'My Data Warehouse',
    // Add real addresses/URLs below. Leave empty to show a friendly setup message.
    email: '',
    github: '',
    linkedin: '',
    youtube: '',
    medium: '',
    coffee: ''
  },
  categories: [
    {id:'all',name:'All shelves',emoji:'✳'},
    {id:'career',name:'Career',emoji:'🌱'},
    {id:'sql',name:'SQL',emoji:'🗄️'},
    {id:'python',name:'Python',emoji:'🐍'},
    {id:'visualization',name:'Visualization',emoji:'📊'}
  ],
  posts: [
    {
      id:'my-data-journey', category:'career', label:'Career', title:'My Journey into Data: From 0 to Data Analyst',
      excerpt:'How I got into data, what I learned, and the milestones along the way.',
      image:'assets/img/post-career.webp', minutes:6, demo:true,
      intro:'Every data career has a beginning, and most are far less linear than they look from the outside.',
      paragraphs:[
        'This is a sample career post. Replace it with your actual story: what drew you to data, where you started, and what surprised you along the way.',
        'Think of one small turning point. Maybe it was a messy Excel report, a project you stayed up too late to finish, or the first time a SQL query finally worked. Specific stories make a portfolio memorable.',
        'Add the skills you picked up, the parts you struggled with, and what you would tell your earlier self. People reading your work often want the honest version.'
      ], takeaways:['Start with one real moment, not your whole résumé.','Show the project or lesson that changed your direction.','Tell readers what you are learning next.']
    },
    {
      id:'sql-essentials', category:'sql', label:'SQL', title:'SQL Essentials for Data Analytics',
      excerpt:'The most useful SQL concepts I actually use in real work, with examples.',
      image:'assets/img/post-sql.webp', minutes:8, demo:true,
      intro:'The best SQL notes are the ones you can actually reach for when a query goes sideways.',
      paragraphs:[
        'I start with filtering, grouping, and joins. Then I move to CTEs and window functions, which make more complex analyses easier to explain.',
        'A practical habit: check row counts before and after every join. It catches a surprising number of quietly broken analyses.',
        'When teaching SQL, use one little dataset end to end. Orders, customers, and products are more useful than a dozen unrelated snippets.'
      ],takeaways:['Know the grain of each table before joining.','Use CTEs to name your logic clearly.','Validate totals before trusting a dashboard.']
    },
    {
      id:'visual-storytelling', category:'visualization', label:'Visualization', title:'Data Visualization: Tell a Better Story with Data',
      excerpt:'Tips for making data visuals clear, insightful, and genuinely useful.',
      image:'assets/img/post-viz.webp', minutes:5, demo:true,
      intro:'A good chart makes one thing easier to understand than it was before.',
      paragraphs:[
        'Before choosing colors or chart types, write down the question the chart needs to answer. That sentence is your design brief.',
        'Show comparisons honestly. Label units, avoid unnecessary clutter, and annotate the one point you want people to notice.',
        'A chart is part of a conversation. Give the reader enough context to know what the numbers mean and why they might care.'
      ],takeaways:['Lead with the question.','Use emphasis only where it improves reading.','Include units and relevant context.']
    },
    {
      id:'pandas-cleaning', category:'python', label:'Python', title:'Cleaning Messy Data with Pandas',
      excerpt:'A small, reusable workflow for turning messy CSVs into datasets you trust.',
      image:'assets/img/post-python.webp', minutes:7, demo:true,
      intro:'Cleaning data is where you discover what the dataset actually contains.',
      paragraphs:[
        'Start with a quick profile: shape, data types, nulls, duplicates, and unusual values. Write down the assumptions you make.',
        'Separate raw data from transformed data, and keep transformations reproducible. A script you can rerun beats a manual fix you cannot explain.',
        'Always check the output. Cleaning is not finished when the code runs; it is finished when the results still make sense.'
      ],takeaways:['Inspect before changing.','Keep raw inputs untouched.','Validate every meaningful transformation.']
    },
    {
      id:'storytelling-stakeholders', category:'visualization', label:'Visualization', title:'Presenting Insights People Remember',
      excerpt:'What to put on the slide when your audience wants answers, not chart soup.',
      image:'assets/img/post-story.webp', minutes:4, demo:true,
      intro:'Your audience should know the point of a slide without decoding five charts.',
      paragraphs:[
        'Write the headline as a finding, not the chart name. “Repeat purchases fell in March” is more helpful than “Monthly purchase rate.”',
        'Put the business question first, the evidence second, and the action or open question last.',
        'Keep the deeper analysis available for anyone who wants to inspect it, but make the first pass easy to follow.'
      ],takeaways:['Use conclusion-led chart titles.','Connect the finding to a decision.','Keep supporting detail close by.']
    },
    {
      id:'learning-roadmap', category:'career', label:'Career', title:'My Practical Roadmap for Learning Data',
      excerpt:'A learning path with room for wrong turns, mini projects, and little wins.',
      image:'assets/img/post-roadmap.webp', minutes:6, demo:true,
      intro:'A roadmap is useful when it helps you choose your next project, not just your next course.',
      paragraphs:[
        'Build a base in spreadsheets and SQL, then learn enough Python or BI tooling to answer more interesting questions.',
        'Keep projects scoped. A clean, explained analysis of one dataset can say more than five unfinished dashboards.',
        'Document what broke and how you fixed it. That is often the part other learners find most helpful.'
      ],takeaways:['Learn in small cycles.','Build as you go.','Keep the useful notes public.']
    }
  ],
  projects: [
    {id:'ecommerce-dashboard',title:'E-commerce Performance Dashboard',category:'Data Analytics',label:'Dashboard',summary:'Analyze sales performance and customer behavior for an e-commerce platform.',image:'assets/img/project-ecommerce.webp',tools:['Python','SQL','Tableau'],demo:true,challenge:'How can a growing online store tell which products and customer segments are driving its results?',approach:'Clean order-level data, define consistent metrics, then build a dashboard that moves from revenue trends to category and cohort analysis.',insights:['Track revenue and conversion together.','Compare product categories by growth and repeat purchase rate.','Highlight areas that need deeper investigation.']},
    {id:'customer-segmentation',title:'Customer Segmentation with RFM',category:'Customer Analytics',label:'Analytics',summary:'Group customers by recency, frequency, and monetary value to make retention strategies clearer.',image:'assets/img/project-customer.webp',tools:['Python','Pandas','SQL'],demo:true,challenge:'Which groups of customers should a marketing team focus on first?',approach:'Calculate RFM measures, build understandable segments, and compare behavior between those groups.',insights:['Make customer segments interpretable.','Flag high-value customers at risk.','Explain trade-offs behind segment thresholds.']},
    {id:'data-pipeline',title:'Automated Analytics Data Pipeline',category:'Data Engineering',label:'Engineering',summary:'A reproducible pipeline from raw transactional data into clean analytics tables.',image:'assets/img/project-pipeline.webp',tools:['Python','dbt','BigQuery'],demo:true,challenge:'How do you reduce repetitive manual data preparation while making datasets more trustworthy?',approach:'Schedule extraction, model staging and marts, and add basic validation checks before publishing datasets.',insights:['Separate raw, staging, and reporting layers.','Test keys, nulls, and source freshness.','Document assumptions beside the transformations.']},
    {id:'ab-experiment',title:'Checkout A/B Test Deep Dive',category:'Experimentation',label:'Experiment',summary:'An end-to-end example of planning, analyzing, and communicating an experiment.',image:'assets/img/project-abtest.webp',tools:['SQL','Python','Statistics'],demo:true,challenge:'Would a revised checkout call to action improve completed purchases?',approach:'Define a primary metric, check randomization and sample size, then estimate the uplift with uncertainty.',insights:['Decide the metric before looking at results.','Report uncertainty alongside point estimates.','Separate statistical signals from business decisions.']}
  ],
  timeline: [
    {year:'01',title:'Curiosity sparked',desc:'The first spreadsheet, class, or tiny project that got me asking better questions.',emoji:'✨'},
    {year:'02',title:'Learning the toolkit',desc:'SQL, Python, dashboards, and a lot of debugging along the way.',emoji:'🌱'},
    {year:'03',title:'Building things',desc:'Turning ideas into projects, then learning how to explain what they actually mean.',emoji:'🛠️'},
    {year:'→',title:'Still figuring it out',desc:'Sharing what I learn and leaving the warehouse door open for others.',emoji:'💌'}
  ]
};


// More editable sample content for the complete, multi-page website.
// All examples are fictional/educational. Replace with your actual work before publishing.
window.WAREHOUSE.posts.push(
  {id:'window-functions',category:'sql',label:'SQL',title:'Window Functions Without the Headache',excerpt:'ROW_NUMBER, LAG, running totals, and when to use each one.',image:'assets/img/post-sql.webp',minutes:9,demo:true,intro:'Window functions let you compare rows without collapsing the result into one row per group.',paragraphs:['Use ROW_NUMBER when you need one ranked record per group; use RANK when ties should share positions.','LAG compares the current row with a prior row, making it useful for growth calculations.','Partitioning defines the group and ordering defines the sequence. Without both, results often look plausible while answering the wrong question.'],takeaways:['PARTITION BY creates separate windows.','ORDER BY determines which row comes first.','Always check ties and missing periods.']},
  {id:'metric-definitions',category:'visualization',label:'Visualization',title:'Metrics That Mean the Same Thing to Everyone',excerpt:'Build a metric dictionary before five dashboards invent five definitions.',image:'assets/img/post-viz.webp',minutes:7,demo:true,intro:'The easiest way to break a dashboard is to use a metric no one has agreed on.',paragraphs:['Write down the numerator, denominator, grain, time zone, and exclusions for each metric.','Revenue can mean placed orders, paid orders, or net revenue after refunds. Pick a definition and display it where people can find it.','A small metric dictionary is often more useful than another dashboard page.'],takeaways:['Define metrics in plain language.','Keep time windows explicit.','Document exclusions and ownership.']},
  {id:'building-first-portfolio',category:'career',label:'Career',title:'What Makes a Portfolio Project Worth Reading?',excerpt:'Scope, trade-offs and storytelling matter more than a long tool list.',image:'assets/img/post-roadmap.webp',minutes:6,demo:true,intro:'A strong portfolio is a guided tour of your reasoning.',paragraphs:['Start with a question someone could realistically care about. Show what data you had and what you wished you had.','Explain your decisions: why this metric, why this chart, why this level of detail.','Make the repository navigable with a short README, reproducible steps and a screenshot of the outcome.'],takeaways:['Lead with the problem.','Show evidence of decisions.','Make reproduction easy.']},
  {id:'python-validation',category:'python',label:'Python',title:'Five Checks Before You Trust a CSV',excerpt:'A repeatable pre-flight checklist for messy source files.',image:'assets/img/post-python.webp',minutes:8,demo:true,intro:'An analysis can run perfectly and still start with broken inputs.',paragraphs:['Check column types, expected uniqueness, allowed values, missing values, and time ranges.','Write assertions so unexpected changes stop the pipeline early instead of silently flowing into a chart.','Keep a small log of row counts at each transformation step.'],takeaways:['Treat assumptions as executable checks.','Keep logs of transformations.','Investigate anomalies before visualizing them.']},
  {id:'analytics-experiments',category:'sql',label:'SQL',title:'A Practical Guide to Funnel Analysis',excerpt:'From event logs to the moments where people drop off.',image:'assets/img/post-sql.webp',minutes:8,demo:true,intro:'Funnels are useful only when the steps and eligibility rules are consistent.',paragraphs:['Define each step as a clear event and build cohorts from eligible entrants.','Ensure that step two happens after step one and consider whether users can repeat steps.','Slice the funnel by channel or device carefully because small groups can create misleading swings.'],takeaways:['Define the cohort once.','Preserve event order.','Distinguish counts of users from counts of events.']}
);
window.WAREHOUSE.projects.push(
  {id:'product-funnel',title:'Product Funnel Explorer',category:'Product Analytics',label:'Analytics',summary:'An interactive exploration of activation steps and drop-off patterns.',image:'assets/img/project-customer.webp',tools:['SQL','Python','Product analytics'],demo:true,challenge:'Which steps in a signup and activation flow create the most avoidable friction?',approach:'Define ordered events and eligible cohorts, compare funnel completion by source, and validate the event instrumentation.',insights:['Funnels depend on event order.','Segment comparisons require adequate sample sizes.','A drop-off rate alone does not explain user intent.']},
  {id:'data-quality',title:'Data Quality Monitor',category:'Data Engineering',label:'Engineering',summary:'A simple way to surface source freshness, duplicate keys, and missing values.',image:'assets/img/project-pipeline.webp',tools:['Python','SQL','Automation'],demo:true,challenge:'How do teams notice data breakage before a stakeholder sees it in a report?',approach:'Define freshness and quality contracts, schedule checks, and alert only when actionable thresholds fail.',insights:['Monitor freshness and validity separately.','Make owners and action steps visible.','Tune alerts to prevent notification fatigue.']}
);
window.WAREHOUSE.articleExtras = {
  'my-data-journey': [
    {title:'Where the story starts',text:'Use this chapter to explain one real moment that changed the direction of your career. Readers do not need your entire résumé; they need to know what made you curious and what you did next.'},
    {title:'Projects that taught me the most',text:'Choose two or three things you built. Describe the ugly first draft, the trade-off you made, and how you would improve the work now.'},
    {title:'The skills behind the title',text:'List the skills you use in actual decisions: asking questions, checking data quality, making trade-offs, talking to people, and translating results into actions.'},
    {title:'What I am exploring next',text:'Finish with a concrete next experiment or learning question. Update this section as your work changes.'}
  ],
  'sql-essentials': [
    {title:'Know your table grain',text:'Before writing a JOIN, write one sentence describing what a row represents in each table. A customer table might have one row per customer; an order table has one row per order. Joining them changes the row count.',code:'SELECT customer_id, COUNT(*) AS orders\nFROM orders\nWHERE status = \'paid\'\nGROUP BY customer_id;'},
    {title:'Build logic in CTEs',text:'A named step makes a query easier to review, validate, and change. You can also inspect an intermediate CTE to check that it has the expected row count.',code:'WITH paid_orders AS (\n  SELECT customer_id, amount\n  FROM orders\n  WHERE status = \'paid\'\n)\nSELECT customer_id, SUM(amount) AS revenue\nFROM paid_orders\nGROUP BY customer_id;'},
    {title:'Watch out for duplicate joins',text:'If each order has many line items, joining the order table to line items will repeat the order amount. Aggregate at the correct grain or use the appropriate measures before joining.'}
  ],
  'visual-storytelling':[
    {title:'Choose the question before the chart',text:'“Did we grow?” suggests a trend chart. “Which category grew fastest?” suggests an ordered comparison. The question should decide the chart, not the other way around.'},
    {title:'Make comparisons obvious',text:'Sort categories, show units, and use visual emphasis sparingly. A 3D chart makes precise comparison harder without adding information.'},
    {title:'Annotate the one finding that matters',text:'Add a short callout when a spike has context, like a campaign launch or data issue. Do not assume the reader knows why a number moved.'}
  ],
  'pandas-cleaning':[
    {title:'Profile the input',text:'Make the raw dataset immutable. Run a quick profile before modifying anything.',code:'print(df.shape)\nprint(df.dtypes)\nprint(df.isna().sum())\nprint(df.duplicated().sum())'},
    {title:'Make transformations explicit',text:'Rather than changing a column in five different places, centralize transformations and give intermediate variables descriptive names.',code:'clean = (df\n  .drop_duplicates(subset=[\'order_id\'])\n  .assign(order_date=lambda x: pd.to_datetime(x.order_date))\n)'},
    {title:'Validate the output',text:'Assert required keys are present and numeric fields are in their permitted ranges. If assumptions fail, investigate rather than silently filling every missing value.'}
  ],
  'storytelling-stakeholders':[
    {title:'Write an answer as the headline',text:'Replace generic titles such as “Revenue by month” with specific findings supported by the visual.'},
    {title:'Use one slide per decision',text:'You may have 20 charts in the appendix, but the opening story should tell people what changed, why it matters, and what decision is needed.'},
    {title:'Anticipate the next question',text:'If revenue rose, was it volume or price? If retention fell, which cohort drove it? Prepare supporting analysis for follow-up questions.'}
  ],
  'learning-roadmap':[
    {title:'A compact learning loop',text:'Pick one question, study just enough to answer it, build the answer, and write down what broke. Repeat with slightly harder projects.'},
    {title:'The basics that keep paying off',text:'Table grain, SQL joins, basic statistics, spreadsheets, data cleaning, and communication show up repeatedly across tools.'},
    {title:'How to show growth',text:'Keep older projects around with notes on what you would improve. A clear improvement story is stronger than a list of courses.'}
  ],
  'window-functions':[
    {title:'Find the latest record per customer',text:'ROW_NUMBER assigns positions within each customer group. Filter to rn = 1 after sorting newest first.',code:'WITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER (\n    PARTITION BY customer_id\n    ORDER BY updated_at DESC\n  ) AS rn\n  FROM customer_events\n)\nSELECT * FROM ranked WHERE rn = 1;'},
    {title:'Compare this month with last month',text:'LAG pulls a prior period into the current row. Missing months require special handling, so first decide whether your calendar is complete.',code:'SELECT month, revenue,\n  LAG(revenue) OVER (ORDER BY month) AS previous_revenue\nFROM monthly_sales;'},
    {title:'Calculate a running total',text:'Specify an explicit row window to avoid surprising behavior with repeated timestamps.',code:'SUM(revenue) OVER (\n  ORDER BY month\n  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n)'}
  ],
  'metric-definitions':[
    {title:'Start with a metric contract',text:'Write down the name, business question, numerator, denominator, time range, filters, grain, and owner.'},
    {title:'A simple example',text:'Conversion rate = number of unique sessions with a purchase divided by number of eligible sessions, measured in the same time zone and using the same attribution rules.'},
    {title:'Keep definitions near dashboards',text:'A linked dictionary saves recurring explanations and prevents teams from creating subtly incompatible numbers.'}
  ],
  'building-first-portfolio':[
    {title:'Start with one real decision',text:'Avoid opening with a tool stack. Begin with the question a stakeholder would ask, even when your case is a self-initiated project.'},
    {title:'Explain your trade-offs',text:'Describe missing data, imperfect proxies, validation checks, and what you would test if you had more time.'},
    {title:'Make the work skimmable',text:'Include an overview, clear screenshots, a key finding, and a link to the deeper technical write-up.'}
  ],
  'python-validation':[
    {title:'Put guardrails in code',text:'Assertions give assumptions a visible failure mode instead of letting bad data pass silently.',code:'assert df["order_id"].notna().all()\nassert df["order_id"].is_unique\nassert df["amount"].ge(0).all()'},
    {title:'Check freshness and coverage',text:'Look at min/max dates, expected daily counts, and whether the file covers the period you think it covers.'},
    {title:'Write a short validation report',text:'Save row counts, unexpected categories, missing values, and any transformations to a log that can be reviewed later.'}
  ],
  'analytics-experiments':[
    {title:'Build a valid starting cohort',text:'Start from eligible users, not from users who succeeded at the first step, or the conversion rate may look artificially high.'},
    {title:'Respect event order',text:'A funnel stage only counts if it happened after the prior stage within the agreed conversion window.'},
    {title:'Compare segments with context',text:'Always display raw counts alongside rates so a tiny cohort does not look as reliable as a large one.'}
  ]
};
window.WAREHOUSE.projectExtras = {
  'ecommerce-dashboard': {scope:'Transaction-level orders, customer profiles and product attributes (synthetic example dataset).',steps:['Audit order status, currency, refunds and duplicated keys.','Create a metric layer for gross and net revenue, orders and repeat customers.','Build an overview page and deeper drilldowns for channel and region.','Validate totals against source queries and document limits.'],outcome:'The example dashboard highlights where orders, revenue and average order value diverge. The interactive lab uses generated numbers, not actual business performance.',next:'Add cohort retention and automated data quality checks.'},
  'customer-segmentation': {scope:'Synthetic purchase history at customer and transaction grain.',steps:['Calculate recency, frequency and monetary measures.','Examine skewed spend and extreme buyers.','Use interpretable quantile thresholds and label segments.','Compare business actions for each group.'],outcome:'A simple segment matrix can support retention hypotheses, but should be validated against real campaign outcomes.',next:'Compare rule-based groups with clustering and measure stability over time.'},
  'data-pipeline': {scope:'Example raw order CSV files, staged tables and analytics marts.',steps:['Design source contracts and ingestion rules.','Stage typed and deduplicated records.','Model fact and dimension tables with documented grains.','Schedule checks for freshness, nulls and uniqueness.'],outcome:'A repeatable workflow and clearer lineage, demonstrated using sample data.',next:'Add orchestration, incremental models and observability.'},
  'ab-experiment': {scope:'Synthetic checkout sessions with variant assignment and completion outcomes.',steps:['Define primary and guardrail metrics before analysis.','Check randomization and sample ratio mismatch.','Estimate conversion uplift with an interval.','Write a decision memo that includes limitations.'],outcome:'The case study shows how to report an experiment responsibly without turning a small difference into a guarantee.',next:'Explore heterogeneity cautiously, with predeclared segments.'},
  'product-funnel': {scope:'Example event logs for signup, onboarding and first action.',steps:['Specify eligible entrants and event definitions.','Build ordered step completion within a fixed window.','Compare device and acquisition cohorts.','Audit instrumentation gaps before deciding on improvements.'],outcome:'A diagnostic funnel helps prioritize research but cannot tell you why users left.',next:'Pair funnel findings with session research and usability tests.'},
  'data-quality': {scope:'Synthetic daily source snapshots, freshness timestamps and row-level rules.',steps:['Define checks with severity and owning team.','Run uniqueness, null and freshness checks on each batch.','Persist test results for trend analysis.','Surface only actionable failures with debugging context.'],outcome:'An example monitoring workflow that turns silent data problems into visible signals.',next:'Integrate with Slack or email after configuring real alert channels.'}
};
