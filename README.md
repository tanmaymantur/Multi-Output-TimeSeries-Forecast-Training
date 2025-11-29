This project is designed as a training document explaining how to apply the multi-output method in time series forecasting.

This means that a single model simultaneously predicts multiple future values. Therefore, more stable results are obtained compared to the recursive method.

For the Turkisch Article Related This Project and Coding: https://medium.com/@aydogdunurdan/zaman-serilerinde-%C3%A7oklu-multi-output-tahmin-y%C3%B6ntemi-20caa672d7a3 

In this project, a simple, synthetic monthly price series was created for the Multi-Output Time Series Forecasting application example. A Linear Regression model was chosen for simplicity, clarity, and instruction. Test performance was calculated, and then a multi-output forecast model was created for the next 24 months.

MULTI-OUTPUT (Direct Multi-Step) METHOD — GENERAL SUMMARY

A Multi-Output Linear Regression model was built on a synthetic 72-month time series, simultaneously forecasting a 12-month lag and a 24-month future shift. The goal was to forecast 24 different futures at once. In this approach, the model learns in the following structure:

Inputs → Historical prices of the last 12 months

Outputs → Prices of the next 24 months

To do this, in data preparation:

Lag features (lag_1 … lag_12) were created.

Next 24 targets (target_t_plus_1 … target_t_plus_24) were created.

Due to forward and backward scrolling, the DataFrame now has 36 rows of data.

The first 24 rows of this are separated into train rows, and the last 12 rows are separated into test rows.

The model was built with MultiOutputRegressor → LinearRegression.

The model generated a 24-month one-time forecast using the last row of the test set.

Performance was measured using a 1-step error (MSE, RMSE, MAE, MAPE).

As a result of this process, the model was able to capture both a trend and seasonal movements.

🧠 Why Multi-Output? (Short Logic)

This method:

- Unlike the iterative method, it doesn't accumulate error because it doesn't feed the prediction back into itself.

- It learns different futures with 24 periods independently but simultaneously.

- It's fast and practical for multi-step predictions.

- It's useful when you need to generate 24 numbers at once.

Disadvantages:

- Accuracy generally decreases for distant steps like t+12, t+18, and t+24.

- Because it's difficult to know distant targets, the model may have difficulty learning these relationships.

- Because each forward step is disconnected from the other, the "past → very distant future" relationship may weaken.

📊 What did we achieve in this application?
✔ 1. We captured both trend and seasonality in the synthetic data.

The synthetic series we generated had: a linear trend, a 12-month sinusoidal seasonal cycle, and noise.
Even Linear Regression was able to follow this structure to a certain extent.

✔ 2. We correctly established the 12 → 24 window structure.

Lag window: 12 months

Future window: 24 months

This is referred to in the literature as 12×24 windowed supervised learning.

We transformed the time series into a classic machine learning problem.

✔ 3. We successfully established the multi-output target structure.

The model learned 24 different y-values ​​as a vector—this is the most important step in multi-step future prediction methods.

✔ 4. Performance measurements were added using real test data.

MSE, RMSE, MAE, and MAPE values ​​were calculated.

These metrics showed how accurately the model learned one step ahead.

✔ 5. The future was visualized with Actual vs. Forecast graphs.

The time series graph shows the actual series on the left and the 24-month forecast line on the right.

We found that the model maintained the trend and largely followed the seasonal pattern.

🔍 Strengths of This Study
⭐ 1. Predicting multiple steps at once is fast.

It doesn't require running the model 24 times, as in the iterative method.

⭐ 2. It provides more stable predictions.

This is because errors made in one step aren't carried over to the next.

⭐ 3. It's simple to code.

We adjust the data once, and the model learns in one go.

⚠️ Weaknesses
❗ 1. Accuracy for further steps is generally poor.

For example, the actual information for future targets, such as t+20 and t+24, is limited.

❗ 2. Because all targets are learned by the same model,

an error in one future can affect another future.

❗ 3. It's not as flexible as deep learning or complex models.

Linear models like Linear Regression cannot capture complex relationships.

💡 Suggestions for future improvement
✔ 1. Use more powerful models

Multi-output Linear Regression is ideal for starting;

however, performance increases significantly with:

Random Forest Regressor, XGBoost, LightGBM, CatBoost, Multi-Output Neural Networks, Seq2Seq LSTM

✔ 2. Add Feature Engineering

The following extra columns provide significant benefits:

-Month data (1..12)
-Year data
-Sine–cosine seasonality
-Moving averages (MA3, MA6, MA12)
-Differences (price.diff())

✔ 3. Calculate performance for each step

It's not just t+1: it makes sense to generate separate error tables for t+3, t+6, t+12, and t+24.

✔ 4. Apply with real data

Synthetic data is good for teaching concepts, but in real time series:
Trend shifts, regime disruptions, weather events, war, economic crises, and market behavior change the nature of the work. Working with real data reveals much to learn.

✔ 5. Combining Multi-Output and Iterative Approaches



Trend shifts, regime disruptions, weather events, war, economic crises, and market behavior change the nature of the work. Working with real data reveals much to learn.

✔ 5. Combining Multi-Output and Iterative Approaches
