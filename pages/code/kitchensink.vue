<template>
	<main class="page page--code">
		<Heading>
			<h1>This is just the kitchensink for this website...</h1>
		</Heading>
		<Content class="background--red">
			<h3>
				Showing off all the components and style is my thing.. that's why it's
				just public. It helps me to keep track of everything and see if I didn't
				break anything.
			</h3>
		</Content>
		<Content>
			<h2>Headers</h2>

			<table>
				<thead>
					<tr>
						<th>heading</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>h1</td>
						<td><h1>The quick brown fox jumps over the lazy dog</h1></td>
					</tr>
					<tr>
						<td>h2</td>
						<td><h2>The quick brown fox jumps over the lazy dog</h2></td>
					</tr>
					<tr>
						<td>h3</td>
						<td><h3>The quick brown fox jumps over the lazy dog</h3></td>
					</tr>
					<tr>
						<td>h4</td>
						<td><h4>The quick brown fox jumps over the lazy dog</h4></td>
					</tr>
					<tr>
						<td>h5</td>
						<td><h5>The quick brown fox jumps over the lazy dog</h5></td>
					</tr>
					<tr>
						<td>h6</td>
						<td><h6>The quick brown fox jumps over the lazy dog</h6></td>
					</tr>
				</tbody>
			</table>
		</Content>
		<Content class="background--beige">
			<h2>Forms</h2>
			<h4>Text Inputs</h4>
			<table>
				<thead>
					<tr>
						<th>heading</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>InputText</td>
						<td><InputText label="First name">Test</InputText></td>
					</tr>
					<tr>
						<td>InputText</td>
						<td>
							<InputText placeholder="I have a placeholder">Test</InputText>
						</td>
					</tr>
					<tr>
						<td>InputText</td>
						<td><InputText>Test</InputText></td>
					</tr>
				</tbody>
			</table>
			<h4>Options</h4>
		</Content>
		<div class="row small-full medium-half">
			<PageBlock class="column background--skyblue">
				<h3>Radio</h3>
				<hr />
				<h4>Single</h4>
				<InputRadio>Are you sure?</InputRadio>
				<h4>Group</h4>
				<InputRadios label="Are you sure?" :options="exampleOptions" />
			</PageBlock>
			<PageBlock class="column background--blue">
				<h3>Checkbox</h3>
				<hr />
				<h4>Single</h4>
				<InputCheck>Are you sure?</InputCheck>
				<h4>Group</h4>
				<InputChecks label="Are you sure?" :options="exampleOptions" />
			</PageBlock>
			<PageBlock class="column background--yellowlight">
				<h3>Options</h3>
				<hr />
				<h4>Single</h4>
				<InputOptions
					multi
					:options="[{ label: `Are you sure?`, value: false }]"
				/>
				<h4>Group Inline</h4>
				<InputOptions group="inline" :options="exampleOptions" />

				<h4>Group Inline + space</h4>
				<InputOptions group="inline-space" :options="exampleOptions" />

				<h4>Group Stack</h4>
				<InputOptions group="stack" :options="exampleOptions" />

				<h4>Group Stack + space</h4>
				<InputOptions group="stack-space" :options="exampleOptions" />
			</PageBlock>
			<PageBlock class="column background--yellowdark">
				<h3>Options + Multiselect</h3>
				<hr />
				<h4>Single</h4>
				<InputOptions
					multi
					:options="[{ label: `Are you sure?`, value: false }]"
				/>
				<h4>Group Inline</h4>
				<InputOptions multi group="inline" :options="exampleOptions" />

				<h4>Group Inline + space</h4>
				<InputOptions multi group="inline-space" :options="exampleOptions" />

				<h4>Group Stack</h4>
				<InputOptions multi group="stack" :options="exampleOptions" />

				<h4>Group Stack + space</h4>
				<InputOptions multi group="stack-space" :options="exampleOptions" />
			</PageBlock>
		</div>
	</main>
</template>

<script>
import { Content, Heading } from '@/components';
export default {
	components: {
		Content,
		Heading
	},
	data: () => ({
		exampleOptions: [
			{ label: 'Option 1', value: true },
			{ label: 'Another option', value: false },
			{ label: 'Last option', value: false }
		]
	})
};
</script>
