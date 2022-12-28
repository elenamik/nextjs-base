export type UserResponse = {
  user_info: UserInfo;
  assumptions: Assumptions;
};

export type UserInfo = {
  date_of_birth: string;
  household_income: number;
  current_savings_rate: number;
  current_retirement_savings: number;
  full_name: string;
  address: string;
};

export type Assumptions = {
  pre_retirement_income_percent: number;
  life_expectancy: number;
  expected_rate_of_return: number;
  retirement_age: number;
};
