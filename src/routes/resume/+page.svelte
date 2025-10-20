<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ResumeData from '$lib/data/resume';
</script>

<!-- <TitledPage title={ResumeData.title} class="flex flex-col h-screen">
	<a href={ResumeData.resume} class="mx-auto">
		<Button>Download</Button>
	</a>
	<iframe src={ResumeData.resume} class="h-full w-full" title={ResumeData.title}></iframe>


	
</TitledPage> -->


<TitledPage title={ResumeData.title}>
  <div class="flex flex-col h-screen "> 
    
    <iframe
      src={ResumeData.resume}
      class="flex-1 w-full border-none"  
      title={ResumeData.title}
    ></iframe>

	<a href={ResumeData.resume} download class="mx-auto my-2">
      <Button>Download</Button>
    </a>
  </div>
</TitledPage>

