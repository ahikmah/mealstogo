import styled, { DefaultTheme } from 'styled-components/native';

const defaultTextStyles = (theme: DefaultTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const title = (theme: {
  fontSizes: { title: any };
  fonts: { heading: any };
  fontWeights: { medium: any };
}) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
`;

const body = (theme: { fontSizes: { body: any } }) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: { fontSizes: { body: any } }) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: { colors: { text: { error: any } } }) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: { fontSizes: { caption: any } }) => `
    font-size: ${theme.fontSizes.caption};
`;

const label = (theme: {
  fonts: { heading: any };
  fontSizes: { body: any };
  fontWeights: { medium: any };
}) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  title,
  body,
  label,
  caption,
  error,
  hint,
};

type VariantType = keyof typeof variants;

interface ExecutionProps {
  variant?: VariantType;
}

export const Text = styled.Text<ExecutionProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant as VariantType](theme as any)}
`;

Text.defaultProps = {
  variant: 'body',
};
