@extends("layouts.master")
@section("content")

<style>
    .post{
        width: 30%;
        height: 60%;
    }
    .bottom{

    }
</style>

<div class="upload">
    <p>
        Filename:
        <form enctype="multipart/form-data"  action="/upload" method="post">
            @csrf
            <button type="submit">Upload</button>
            <input name="src" type="file" multiple="false" " id=finput >
        </form>
    </p>

</div>
 @endsection
