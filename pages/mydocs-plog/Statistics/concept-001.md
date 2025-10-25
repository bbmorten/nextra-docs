# Standard Deviation, Variance, Mean

The standard deviation is calculated using the following steps:

1. **Calculate the mean (average)** of the data set.
2. **Subtract the mean** from each data point and **square the result**. This gives you the squared differences.
3. **Calculate the mean** of these squared differences. This is known as the variance.
4. **Take the square root** of the variance. This gives you the standard deviation.

In mathematical terms, the standard deviation (\(\sigma\)) for a population is calculated as:

\[
\sigma = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2}
\]

where:

- \(N\) is the number of observations in the population,
- \(x_i\) is each individual observation,
- \(\mu\) is the mean of the observations, and
- \(\sum\) denotes the sum over all observations.

For a sample from a population, the formula is slightly adjusted to:

\[
s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}
\]

where:

- \(n\) is the sample size,
- \(x_i\) is each individual observation in the sample,
- \(\bar{x}\) is the sample mean, and
- \(s\) is the sample standard deviation. The denominator \(n-1\) is used instead of \(N\) to correct for the bias in the estimation of the population variance from a sample (this is known as Bessel's correction).

Let's go through a quick example with a simple dataset: \([2, 4, 4, 4, 5, 5, 7, 9]\).

1. **Calculate the mean**: The mean of these numbers is \((2 + 4 + 4 + 4 + 5 + 5 + 7 + 9) / 8 = 5\).
2. **Subtract the mean and square the result** for each number: \((2-5)^2 = 9\), \((4-5)^2 = 1\), and so on.
3. **Calculate the mean of these squared differences** (the variance): \((9 + 1 + 1 + 1 + 0 + 0 + 4 + 16) / 8 = 4\).
4. **Take the square root of the variance**: \(\sqrt{4} = 2\).

Therefore, the standard deviation of this dataset is 2, indicating that, on average, each number in the set is 2 units away from the mean.
